/**
 * Retrieves a user's contact
 * @param {org.dreamforce.getMyContact} getMyContact - for retrieving a user's contact
 * @transaction
 */
function getMyContact(getMyContact){
//declare variables
  var results;
  
// Get the contact asset registry.
return getAssetRegistry('org.dreamforce.Contact')
  
  .then(function (assetRegistry) {
     for (i=0; i < getMyContact.asset.length; i++)
	{  
  	if (getMyContact.asset[i].contactId == getMyContact.contactId)
  		{
    	if (getMyContact.asset[i].password == getMyContact.password)
    		{
            console.log("Contact Found");
     		return assetRegistry.get(contactId);
    		}	
  		}
	}
  })
  .catch(function (error) {
    // Password Incorrect
  });
}