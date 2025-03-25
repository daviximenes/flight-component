public without sharing class FlightController {
    
    @AuraEnabled(cacheable=true)    
    public static List<Flight__c> searchFlights(String flightNumber, Date departureDate, String origin, String destination) {
        String query = 'SELECT Id, Name, Flight_Number__c, Departure_Date__c, Origin__c, Destination__c FROM Flight__c';
        
        List<String> queryConditions = new List<String>();
        
        if (String.isNotBlank(flightNumber)) {
            queryConditions.add('Flight_Number__c LIKE \'%' + String.escapeSingleQuotes(flightNumber) + '%\'');
        }
        if (departureDate != null) {
            queryConditions.add('Departure_Date__c = :departureDate');
        }
        if (String.isNotBlank(origin)) {
            queryConditions.add('Origin__c LIKE \'%' + String.escapeSingleQuotes(origin) + '%\'');
        }
        if (String.isNotBlank(destination)) {
            queryConditions.add('Destination__c LIKE \'%' + String.escapeSingleQuotes(destination) + '%\'');
        }
        
        if (!queryConditions.isEmpty()) {
            query += ' WHERE ' + String.join(queryConditions, ' AND ');
        }
        
        query += ' ORDER BY Departure_Date__c ASC LIMIT 50';
        
        return Database.query(query);
    }

    
    @AuraEnabled
    public static String createPassengerRecord(Id flightId, String firstName, String lastName, Date dob, 
                                             String gender, String email, String phone) {
        try {
            Passenger__c passenger = new Passenger__c(
                Flight__c = flightId,
                First_Name__c = firstName,
                Last_Name__c = lastName,
                Date_of_Birth__c = dob,
                Gender__c = gender,
                Email__c = email,
                Phone__c = phone
            );
            
            insert passenger;
            return passenger.Id;
        } catch (Exception e) {
            throw new AuraHandledException('Error creating passenger: ' + e.getMessage());
        }
    }
}