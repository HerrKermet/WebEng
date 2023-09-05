var vm = new Vue({
	el:"#app",
	data: {
		cryptoMenge: 0,
		cryptoModifikator: 1,
		infoText: "",
		nextMode: "Darkmode",
		isDarkmode: false,
		upgrades: {
			botminer: {
				name: "Botminer",
				cost: 10,
				amount: 0,
				modifier: 1
			},
			rtx3090: {
				name: "RTX3090",
				cost: 50,
				amount: 0,
				modifier: 5
			},
			netzwerk: {
				name: "Netzwerk",
				cost: 100,
				amount: 0,
				modifier: 10
			},
			serverraum: {
				name: "Serverraum",
				cost: 500,
				amount: 0,
				modifier: 50
			}
		}
	},
	methods:{
		addCrypto: function(){
			this.cryptoMenge += 1 * this.cryptoModifikator;
		},
		increaseModifier: function(code){
			switch(code){
				case "botminer":
					this.tryToBuy(this.upgrades.botminer);
					return;
				case "rtx3090":
					this.tryToBuy(this.upgrades.rtx3090);
					return;
				case "netzwerk":
					this.tryToBuy(this.upgrades.netzwerk);
					return;
				case "serverraum":
					this.tryToBuy(this.upgrades.serverraum);
					return;
				default:
					alert("Something went wrong");
					return;
			}
		},
		tryToBuy: function(obj){
			if(this.cryptoMenge >= obj.cost){
				this.cryptoMenge -= obj.cost;
				obj.amount++;
				this.cryptoModifikator += obj.modifier;
				this.infoText = "Bought upgrade";

			}else{
				this.infoText = "Not enough crypto to buy upgrade";
			}
		},
		toggleOptions(){
			var html = document.querySelector("html");
			this.isDarkmode = !this.isDarkmode;
			if(this.isDarkmode) {
				html.classList.add("darkmode");
				this.nextMode = "Lightmode";
			}else{
				html.classList.remove("darkmode");
				this.nextMode = "Darkmode";
			}

		}
	}
});
