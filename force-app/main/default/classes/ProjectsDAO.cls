public with sharing class ProjectsDAO {
    @AuraEnabled(cacheable=true)
    public static List<Project__c> getAllProjects(){
        try {
            return [SELECT Id, Name, Description__c, Image__c FROM Project__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}