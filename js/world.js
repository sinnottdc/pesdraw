function getScreenSize1(){return screenWidthSize=$j(window).width(),screenWidthSize>=416?screenWidth1=!0:screenWidth1=!1,screenWidth1}function scroll(){if(getScreenSize1(),0==screenWidth1){var a=element;a<4?$j("html, body").animate({scrollTop:0},300):a>=4&&a<=7?$j("html, body").animate({scrollTop:38},300):a>=8&&a<=11?$j("html, body").animate({scrollTop:460},300):a>=12&&a<=15?$j("html, body").animate({scrollTop:700},300):a>=16&&a<=19?$j("html, body").animate({scrollTop:940},300):a>=20&&a<=23?$j("html, body").animate({scrollTop:1160},300):a>=24&&a<=27?$j("html, body").animate({scrollTop:1400},300):a>=28&&a<=31&&$j("html, body").animate({scrollTop:1640},300)}}function drawfull(){this.drawEuro=function(){var c={allTeams:[france,germany,italy,netherlands,belgium,spain,portugal,greece,croatia,bosnia,england,switzerland,ukraine,russia,denmark,romania,scotland,sweden,serbia,turkey,hungary,czech,slovenia,austria,slovakia,albania,norway,iceland,poland,ireland,israel,bulgaria,northernIreland,wales],seedOne:[],seedTwo:[],seedThree:[],seedFour:[],drawnTeams:[]};utils.sortSeedGroups(c.seedOne,c.seedTwo,c.seedThree,c.seedFour,c.allTeams),utils.shuffle(c.seedOne),utils.shuffle(c.seedTwo),utils.shuffle(c.seedThree),utils.shuffle(c.seedFour),utils.sortArrays(c.allTeams),function(){utils.shuffle(c.seedTwo),remainingSeedTwo=c.seedTwo.splice(3,4);var a=c.seedTwo.splice(5,1),b=a.concat(c.seedOne);utils.shuffle(b),remainingTopSeeds=b.splice(3,3),utils.shuffle(b),draw(4,b,0),c.drawnTeams=c.drawnTeams.concat(b),s1=utils.shuffle(b)}(),function(){var a=c.seedThree.splice(7,2),b=remainingTopSeeds.concat(c.seedTwo);roundTwo=a.concat(b),utils.shuffle(roundTwo);var d=roundTwo.splice(6,4);draw(4,d,1),c.drawnTeams=c.drawnTeams.concat(d),s2=utils.shuffle(d)}(),function(){remainingSeedThree=c.seedThree.splice(5,2),b=remainingSeedTwo.concat(c.seedThree),utils.shuffle(b);var a=c.seedFour.splice(6,2);seedThreeFinal=a.concat(b),utils.shuffle(seedThreeFinal);var d=seedThreeFinal.splice(4,4);draw(4,d,2),c.drawnTeams=c.drawnTeams.concat(d),s3=utils.shuffle(d)}(),function(){a=remainingSeedThree.concat(seedThreeFinal),utils.shuffle(a),a=a.splice(3,4),draw(4,a,3),c.drawnTeams=c.drawnTeams.concat(a),s4=utils.shuffle(a)}(),this.allTeams=c.allTeams,this.drawnTeams=c.drawnTeams},this.drawEuro2016=function(){var c={allTeams:[france,germany,italy,netherlands,belgium,spain,portugal,greece,croatia,bosnia,england,switzerland,ukraine,russia,denmark,romania,scotland,sweden,serbia,turkey,hungary,czech,slovenia,austria,slovakia,iceland,norway,albania,poland,ireland,israel,bulgaria,northernIreland,wales],seedOne:[],seedTwo:[],seedThree:[],seedFour:[],drawnTeams:[]};utils.sortSeedGroups(c.seedOne,c.seedTwo,c.seedThree,c.seedFour,c.allTeams),utils.shuffle(c.seedOne),utils.shuffle(c.seedTwo),utils.shuffle(c.seedThree),utils.shuffle(c.seedFour),utils.sortArrays(c.allTeams),function(){remainingSeedTwo=c.seedTwo.splice(3,4);var a=c.seedTwo.splice(1,2),b=a.concat(c.seedOne);utils.shuffle(b),remainingTopSeeds=b.splice(6,4),utils.shuffle(b),draw(6,b,0),c.drawnTeams=c.drawnTeams.concat(b),s1=utils.shuffle(b)}(),function(){var a=c.seedThree.splice(5,4),b=remainingTopSeeds.concat(c.seedTwo);roundTwo=a.concat(b),utils.shuffle(roundTwo);var d=roundTwo.splice(4,6);draw(6,d,1),c.drawnTeams=c.drawnTeams.concat(d),s2=utils.shuffle(d)}(),function(){remainingSeedThree=c.seedThree.splice(2,2),b=remainingSeedTwo.concat(c.seedThree),utils.shuffle(b);var a=c.seedFour.splice(6,2);seedThreeFinal=a.concat(b),utils.shuffle(seedThreeFinal);var d=seedThreeFinal.splice(2,6);draw(6,d,2),c.drawnTeams=c.drawnTeams.concat(d),s3=utils.shuffle(d)}(),function(){a=remainingSeedThree.concat(seedThreeFinal),utils.shuffle(a),fourth=a.concat(c.seedFour),a=fourth.splice(5,6),draw(6,a,3),c.drawnTeams=c.drawnTeams.concat(a),s4=utils.shuffle(a)}(),this.allTeams=c.allTeams,this.drawnTeams=c.drawnTeams},this.drawWorld=function(){function a(a){for(groupA=[],groupB=[],groupC=[],groupD=[],groupE=[],groupF=[],groupG=[],groupH=[],i=0;i<16;i++){var b=a.splice(i,1);groupA=groupA.concat(b),groupB=a}for(i=0;i<8;i++){var c=groupA.splice(i,1);groupC=groupC.concat(c);var d=groupB.splice(i,1);groupD=groupD.concat(d)}for(i=0;i<4;i++){var e=groupA.splice(i,1);groupE=groupE.concat(e);var f=groupB.splice(i,1);groupF=groupF.concat(f);var g=groupC.splice(i,1);groupG=groupG.concat(g);var h=groupD.splice(i,1);groupH=groupH.concat(h)}}function b(a){return x=a.splice(1,3),utilsWC.shuffle(x),a=a.concat(x)}function c(a){var b=7;for(j=0;j<7;j++){var c=0;for(i=0;i<=3;i++)if(1==a[j][i].region&&c++,c>=3)for(removedEuro=a[j].splice(3,1),t=b;t>=0;t--){var d=!1;if(4==a[t][0].region&&(d=!0,swapTeam=a[t].splice(1,1),a[t]=a[t].concat(removedEuro),a[j]=a[j].concat(swapTeam)),1==d){i=0,c=0,b=t-1;break}}}return a}function d(a){for(j=0;j<7;j++){var b=0,c=0,d=0,e=0;for(i=0;i<=3;i++)if(2==a[j][i].region?b++:3==a[j][i].region?c++:4==a[j][i].region?d++:5==a[j][i].region&&e++,b>=2||c>=2||d>=2||e>=2){removed=a[j].splice(1,1),toReplace=m.splice(0,1),a[j]=a[j].concat(toReplace);break}}return a}function e(a,b){for(i=0;i<4;i++)flagValue=a[i].number,jQuery(".myTables").find("td").eq(b).text(a[i].name).prepend(flagArray.flagsG[flagValue]).addClass("flag"),b++,drawnTeamsWC.push(a[i])}var f={allTeams:[france,germany,italy,netherlands,belgium,spain,portugal,greece,croatia,bosnia,england,switzerland,ukraine,russia,denmark,romania,scotland,sweden,serbia,turkey,hungary,czech,slovenia,austria,slovakia,iceland,norway,albania,poland,ireland,israel,bulgaria,northernIreland,wales,brazil,argentina,colombia,uruguay,chile,costaRica,mexico,algeria,ivoryCoast,nigeria,ghana,egypt,tunisia,cameroon,burkinaFaso,guinea,mali,morocco,senegal,southAfrica,zambia,honduras,jamaica,panama,usa,bolivia,ecuador,paraguay,peru,venezuela,japan,southKorea,uae,australia,china,iraq,kuwait,lebanon,oman,northKorea,qatar,saudiArabia,thailand,newZealand,iran,uzbekistan,jordan],seedOne:[],seedTwo:[],seedThree:[],seedFour:[],drawnTeams:[]},g=[brazil,argentina,germany,spain],h=[colombia,uruguay,belgium,netherlands],k=[italy,france,portugal],l=[chile,costaRica,mexico],m=[switzerland,greece,croatia,england,czech,sweden,denmark],n=[scotland,serbia,turkey,bosnia,hungary,romania,ukraine,russia,austria],o=[albania,norway,iceland,poland,ireland,israel,bulgaria,northernIreland,wales,slovenia,slovakia],p=[algeria,ivoryCoast,nigeria,ghana,egypt,tunisia,cameroon,burkinaFaso],q=[guinea,mali,morocco,senegal,southAfrica,zambia],r=[honduras,jamaica,panama,usa],s=[],u=[bolivia,ecuador,paraguay,peru,venezuela],v=[japan,southKorea,uae,australia],w=[china,iraq,kuwait,lebanon,oman,northKorea,qatar,saudiArabia,thailand,newZealand,iran,uzbekistan,jordan];for(drawnTeams=[],drawnTeamsWC=[],pickedTeams=[],allTeams=g.concat(h,k,l,m,n,o,p,q,r,s,u,v,w),allTeams.sort(function(a,b){var c=a.name.toUpperCase(),d=b.name.toUpperCase();return c<d?-1:c>d?1:0}),function(){var a=[g,h,k,l,m,n,o,p,q,r,s,u,v,w];for(i=0;i<a.length;i++)utilsWC.shuffle(a[i])}(),function(){var a=utilsWC.randNumber(100);if(a>=96){var b=g.splice(3,1),c=h.splice(3,1);if(1==b[0].region){m=m.concat(b);var d=k.splice(2,1);g=g.concat(d)}else{s=s.concat(b);var e=l.splice(2,1);g=g.concat(e)}if(1==c[0].region){m=m.concat(c);var f=k.splice(1,1);h=h.concat(f)}else{s=s.concat(c);var j=l.splice(1,1);h=h.concat(j)}m=m.concat(k),s=s.concat(l)}else if(a>=86&&a<=95){var n=h.splice(1,3),o=n.length;for(i=0;i<o;i++)if(1==n[i].region){m=m.concat(n[i]);var p=k.splice(k.length-1,1);h=h.concat(p)}else{s=s.concat(n[i]);var q=l.splice(l.length-1,1);h=h.concat(q)}m=m.concat(k),s=s.concat(l)}else if(a>=71&&a<=85){var n=h.splice(2,2),o=n.length;for(i=0;i<o;i++)if(1==n[i].region){m=m.concat(n[i]);var p=k.splice(k.length-1,1);h=h.concat(p)}else{s=s.concat(n[i]);var q=l.splice(l.length-1,1);h=h.concat(q)}m=m.concat(k),s=s.concat(l)}else if(a>=50&&a<=70){var n=h.splice(3,1),o=n.length;for(i=0;i<o;i++)if(1==n[i].region){m=m.concat(n[i]);var p=k.splice(k.length-1,1);h=h.concat(p)}else{s=s.concat(n[i]);var q=l.splice(l.length-1,1);h=h.concat(q)}m=m.concat(k),s=s.concat(l)}else m=m.concat(k),s=s.concat(l);drawnTeams=g.concat(h),utilsWC.shuffle(drawnTeams)}(),function(){sAmericaLength=s.length,sAmerica=s.splice(sAmericaLength-2,2),sAmerica_2=u.splice(3,2),sAmerica=sAmerica.concat(sAmerica_2),utilsWC.shuffle(sAmerica),drawnTeams=drawnTeams.concat(sAmerica)}(),function(){africa_1=p.splice(4,4),africa_2=q.splice(5,1),africa=africa_1.concat(africa_2),utilsWC.shuffle(africa),drawnTeams=drawnTeams.concat(africa)}(),function(){asia_1=v.splice(2,2),asia_2=w.splice(7,1),asia=asia_1.concat(asia_2),utilsWC.shuffle(asia),drawnTeams=drawnTeams.concat(asia)}(),function(){utilsWC.shuffle(r),ncAmerica_1=r.splice(2,2),drawnTeams=drawnTeams.concat(ncAmerica_1)}(),function(){var a=utilsWC.randNumber(100);a<=40?(euro_1=m.splice(2,8),euro_2=n.splice(8,1),euro_3=o.splice(8,1),euro=euro_1.concat(euro_2,euro_3),utilsWC.shuffle(euro)):a>=41&&a<=70?(euro_1=m.splice(3,7),euro_2=n.splice(7,2),euro_3=o.splice(8,1),euro=euro_1.concat(euro_2,euro_3),utilsWC.shuffle(euro)):(euro_1=m.splice(4,6),euro_2=n.splice(6,3),euro_3=o.splice(8,1),euro=euro_1.concat(euro_2,euro_3),utilsWC.shuffle(euro)),drawnTeams=drawnTeams.concat(euro)}(),a(drawnTeams),allGroups=[groupA,groupB,groupC,groupD,groupE,groupF,groupG,groupH],c(allGroups),d(allGroups),ex=0;ex<7;ex++)allGroups[ex]=b(allGroups[ex]);for(utilsWC.shuffle(allGroups),x=0,y=0;x<=7;x++,y+=4)e(allGroups[x],y);utilsWC.sortArrays(f.allTeams),this.allTeams=f.allTeams,this.drawnTeams=f.drawnTeams}}function team(a,b,c,d){this.name=a,this.seedGroup=b,this.number=c,this.region=d}function draw(a,b,c){a-=1;for(var d=0,e=0;d<=a;d++,e++){var f=b[e];jQuery(".myTables").find("td").eq(d+c).text(f.name).prepend(flagArray.flagsG[f.number]).addClass("flag"),c+=3}}function generate_flags(a){var b=[];for("euro"==a||"euro16"==a?numTeams=33:"world"==a&&(numTeams=80),"euro16"==a&&(a="euro"),createImage=function(a,b){return img=new Image,img.src=a,img.alt=b,img.title=b,img},flags=0;flags<=numTeams;flags++)b.push(createImage("/images/"+a+"Flags/"+[flags]+".png"));this.flagsG=b}function buttons(){this.reset=function(){"euro"==zone?drawfull.drawEuro():"euro16"==zone?drawfull.drawEuro2016():drawfull.drawWorld(),jQuery("td").removeClass("red"),jQuery("td.table").addClass("hide"),element=0,elementCounter=0,this.createSelect(),jQuery("#teamPicked").hide(),pickedTeams=[],window.matchMedia("(max-width: 370px)").matches&&jQuery("html, body").animate({scrollTop:0},300)},this.createSelect=function(){jQuery("#pickTeam").hide(),jQuery("select").show();for(var a='<option value="blank">Pick team</option>',b=0;b<drawfull.allTeams.length;b++)a+="<option value="+drawfull.allTeams[b].number+' data-image="images/euroFlags/"'+[b]+">"+drawfull.allTeams[b].name+"</option>";jQuery("select").html(a)}}function utils(){this.randNumber=function(a){var b;return b=Math.floor(Math.random()*a+1)},this.shuffle=function(a){var b,c,d;for(b=a.length,c;0!==b;)c=Math.floor(Math.random()*b),b-=1,d=a[b],a[b]=a[c],a[c]=d;return a},this.getScreenSize=function(){return screenWidthSize=$(window).width(),screenWidth=screenWidthSize>=730},this.randTablePos=function(a,b){return rndTabPos=Math.floor(Math.random()*(b-a+1)+a),rndTabPos},this.sortSeedGroups=function(a,b,c,d,e){for(var f=0;f<=e.length-1;f++){var g=e[f].seedGroup;1==g?a.push(e[f]):2==g?b.push(e[f]):3==g?c.push(e[f]):4==g&&d.push(e[f])}},this.sortArrays=function(a){a.sort(function(a,b){var c=a.name.toUpperCase(),d=b.name.toUpperCase();return c<d?-1:c>d?1:0})}}function displayDraw(a){this.drawAllTeams=function(){jQuery("select").hide(),jQuery("td").removeClass("hide"),jQuery("#pickTeam").hide(),jQuery("#teamPicked").show().html("Draw complete"),"world"==zone?element=32:element=16},this.drawIndividual=function(){return jQuery("select").hide(),jQuery("#pickTeam").hide(),jQuery("#teamPicked").show().html("Draw in progress"),jQuery("td:eq("+element+")").removeClass("hide"),"euro"==zone?(elementCounter++,element+=4,4==elementCounter?element=1:8==elementCounter?element=2:12==elementCounter&&(element=3),element>=16&&jQuery("#teamPicked").show().html("Draw complete"),elementCounter):"euro16"==zone?(elementCounter++,element+=4,6==elementCounter?element=1:12==elementCounter?element=2:18==elementCounter&&(element=3),element>=24&&jQuery("#teamPicked").show().html("Draw complete"),elementCounter):"world"==zone&&(jQuery("select").hide(),jQuery("#pickTeam").hide(),jQuery("#teamPicked").show().html("Draw in progress"),jQuery("td:eq("+element+")").removeClass("hide"),1==screenWidth)?(elementCounter++,element+=4,8==elementCounter?element=1:16==elementCounter?element=2:24==elementCounter&&(element=3),element>=32&&jQuery("#teamPicked").show().html("Draw complete"),elementCounter):void 0},this.displayseed=function(a){for(i=0;i<a.length;i++)seedTeam=a[i],jQuery(".seed_display").find("td").eq(i).text(seedTeam)}}var $j=jQuery.noConflict();!function(a){function b(){window.matchMedia("(max-width: 370px)").matches?a("#backToTop").removeClass("topButton"):a("#backToTop").addClass("topButton")}function c(){a("#backToTop").click(function(){a("html, body").animate({scrollTop:0},300)}),a(window).scroll(function(){var b=a(window).scrollTop()>70;b&&!d?(d=!0,a("#backToTop").show()):d&&!b&&(d=!1,a("#backToTop").hide())})}window.addEventListener("load",function(){window.scrollTo(0,0)}),window.matchMedia("(max-width: 415px)").matches&&(a("#backToTop").removeClass("topButton"),c());var d=!1;window.onresize=b}(jQuery);var austria=new team("Austria",6,3,1),belgium=new team("Belgium",2,4,1),bosnia=new team("Bosnia & Herz.",5,6,1),bulgaria=new team("Bulgaria",7,8,1),croatia=new team("Croatia",5,16,1),czech=new team("Czech Rep.",6,17,1),denmark=new team("Denmark",5,18,1),england=new team("England",5,21,1),iceland=new team("Iceland",7,22,1),france=new team("France",3,23,1),germany=new team("Germany",1,24,1),greece=new team("Greece",5,26,1),hungary=new team("Hungary",6,29,1),israel=new team("Israel",7,32,1),italy=new team("Italy",3,33,1),albania=new team("Albania",7,41,1),netherlands=new team("Netherlands",2,43,1),northernIreland=new team("N.Ireland",7,47,1),norway=new team("Norway",7,48,1),poland=new team("Poland",7,53,1),portugal=new team("Portugal",3,54,1),ireland=new team("Ireland",7,56,1),romania=new team("Romania",5,57,1),russia=new team("Russia",5,58,1),scotland=new team("Scotland",6,60,1),serbia=new team("Serbia",6,62,1),slovakia=new team("Slovakia",6,63,1),slovenia=new team("Slovenia",6,64,1),spain=new team("Spain",1,67,1),sweden=new team("Sweden",6,68,1),switzerland=new team("Switzerland",5,69,1),turkey=new team("Turkey",6,72,1),ukraine=new team("Ukraine",5,74,1),wales=new team("Wales",7,79,1),algeria=new team("Algeria",8,0,2),burkinaFaso=new team("Burkina Faso",8,9,2),cameroon=new team("Cameroon",8,10,2),ivoryCoast=new team("Cote D'Ivoire",8,15,2),egypt=new team("Egypt",8,20,2),ghana=new team("Ghana",8,25,2),guinea=new team("Guinea",9,27,2),mali=new team("Mali",9,39,2),morocco=new team("Morocco",9,42,2),nigeria=new team("Nigeria",8,45,2),senegal=new team("Senegal",9,61,2),southAfrica=new team("South Africa",9,65,2),tunisia=new team("Tunisia",8,71,2),zambia=new team("Zambia",9,80,2),costaRica=new team("Costa Rica",4,14,3),honduras=new team("Honduras",4,28,3),jamaica=new team("Jamaica",4,34,3),mexico=new team("Mexico",4,40,3),panama=new team("Panama",4,50,3),usa=new team("USA",4,76,3),argentina=new team("Argentina",4,1,4),bolivia=new team("Bolivia",4,5,4),brazil=new team("Brazil",4,7,4),chile=new team("Chile",4,11,4),colombia=new team("Colombia",4,13,4),ecuador=new team("Ecuador",4,19,4),paraguay=new team("Paraguay",4,51,4),peru=new team("Peru",4,52,4),uruguay=new team("Uruguay",4,75,4),venezuela=new team("Venezuela",4,78,4),australia=new team("Australia",4,2,5),china=new team("China",4,12,5),iran=new team("Iran",4,30,5),iraq=new team("Iraq",4,31,5),japan=new team("Japan",4,35,5),jordan=new team("Jordan",4,36,5),kuwait=new team("Kuwait",4,37,5),lebanon=new team("Lebanon",4,38,5),northKorea=new team("North Korea",4,46,5),oman=new team("Oman",4,49,5),qatar=new team("Qatar",4,55,5),saudiArabia=new team("Saudi Arabia",4,59,5),southKorea=new team("South Korea",4,66,5),thailand=new team("Thailand",4,70,5),uae=new team("UAE",4,73,5),uzbekistan=new team("Uzbekistan",4,77,5),newZealand=new team("New Zealand",4,44,5);element=0;var elementCounter=0,screenWidth=!0,zone="world",flagArray=new generate_flags(zone),buttonsWC=new buttons,utilsWC=new utils,drawfull=new drawfull,displayDraw=new displayDraw;jQuery(document).ready(function(){drawfull.drawWorld(),jQuery("#teamPicked").hide(),buttonsWC.createSelect(),jQuery("select").change(function(){pickedTeams=drawnTeams;var a=jQuery(this).find("option:selected"),b=a.val(),c=parseInt(b),d=a.text();checkSelect=b;var e=!1;for(i=0;i<=7;i++)for(j=0;j<=3;j++)if(d==allGroups[i][j].name){e=!0,jQuery("td:contains('"+d+"')").addClass("red");break}var f=0;if(0==e)for(;0==e;){for(randomGroup=utilsWC.randNumber(7),f=1;f<=3;f++)if(allTeams[c].region==allGroups[randomGroup][f].region){jQuery("td").eq(f+4*randomGroup).text(d).prepend(flagArray.flagsG[c]).addClass("red"),removedTeam=allGroups[randomGroup][f],f=0,e=!0;break}f=0}jQuery("select").hide(),jQuery(function(){jQuery("#teamPicked").html(""+d+" picked").show()})}),jQuery("#draw").click(function(){scroll(),displayDraw.drawIndividual()}),jQuery("#drawAll").click(function(){displayDraw.drawAllTeams()}),jQuery("#reset").click(function(){buttonsWC.reset()})});