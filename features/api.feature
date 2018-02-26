Feature: API test
	Scenario: Api WSDLSoap Test
		Given I am at "http://www.webservicex.net/whois.asmx?WSDL"
		When I send a SOAP request
			| SERVICE | HOSTNAME | ELEMENT   |
			| whoIs   | webName  | chsckWsdl |
			| WhoIs   | WebName  | ChsckWsdl |
		Then I get a "OK" response
	