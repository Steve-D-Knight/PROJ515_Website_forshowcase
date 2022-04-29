var housing_page = '<div>Housing Page</div>';

var image1 = '<img src="images/housing_1.png" alt="LoRaWAN Mesh network node render">';
var image2 = '<img src="images/housing_1_blowup.png" alt="LoRaWAN Mesh network node render">';

housing_page = '<table><tr><td>' + image1 + '<br />' + image2 + '</td><td width="500px" id="whitespace"><div>If we want to be able to use the nodes outide they need to be weather proofed in some way, we decided to go with a 3D printed housing to hold all of the electronics. <br /><br />By 3D printing the housing allows us to have different variations to the housing as well as change components if and when is needed.<br /><br />This housing has:<br /><dl><dt>STM32-WL55JC1 LoRaWAN micro controller</dt><dd>- Connects all of the sensors to the LoRaWAN network</dd><dt>5Ah USB Battery bank</dt><dd>- Allows for over 3 Years of battery life</dd><dt>Small solar panel + buck converter</dt><dd>- Extends that 3 Years to practically infinate</dd></dl></td></tr></table>';



document.getElementById('housing_page').innerHTML = housing_page;