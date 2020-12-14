alert("In Config.js");
alert(window.location.host);
var op_host=window.location.host;
//alert(os.hostname() );
//alert(window.location.hostname);
//alert(location.hostname);
var env_url="";
var env_clientId="";

//var os = require("os"); 
//var hostname = os. hostname();
//alert(hostname);
//alert("location-host");
//alert(location.host);

//var ax = new ActiveXObject("WScript.Network");
//alert(ax.ComputerName);

//var oTest = new ActiveXObject("wscript.shell");
//var PC_hostname = oTest.ExpandEnvironmentStrings("%COMPUTERNAME%"); 
//alert(PC_hostname);
const preProd_host="vaww.esrstage1a.aac.va.gov";
const Prod_host="vaww.esr.aac.va.gov";

var preProd = { host: preProd_host, 
		env_url: "https://usvadceapp.lcahncrls.net/cern-mutual-auth-service/b1930.lcahncrls.net/service/buildpostrequest?data=", 
		client_id: "2633ea01-afd4-4692-b4c3-8894072330d0" };
var Prod = { host: Prod_host, 
		env_url: "https://Prod",
		client_id:"ToBeAdviseProdClient_id"};
var Test = { host: "localhost", 
		env_url: "UrlBingo",
		client_id:"Client_idBingo"};
if (op_host == Test.host) {
	env_url = Test.env_url;
	env_clientId=Test.client_id;	
}
else if (op_host == preProd.host) {
	env_url = preProd.env_url;
	env_clientId=preProd.client_id;	
}
else if (op_host == Prod.host) {
	env_url = Prod.env_url;
	env_clientId=Prod.client_id;	
}
alert("After compare host");
alert(env_url);
alert(env_clientId);

/*  Debug
if  (Echost==Test.host){
	alert(Test.env_url);
	alert(Test.client_id);}

if (preProd.host==preProd_host){
	alert(preProd.env_url);
	alert(preProd.client_id);}

if (Prod.host==Prod_host){
	alert(Prod.env_url);
	alert(Prod.client_id);}   */

