///Team object creator

function team( name, seedGroup, number, region ) {

    this.name = name;
    this.seedGroup = seedGroup;
    this.number = number;
    this.region = region;
}

//noTeams = how many teams to pick / teams = name of array / tablePosition = td position in dom 
function draw( noTeams, teams, tablePosition ) {
    noTeams = noTeams - 1;
    for ( var i = 0, x = 0; i <= noTeams; i++, x++ ) {
        var j = teams[x];
        jQuery( '.myTables' ).find( 'td' ).eq( i + tablePosition ).text( j.name ).prepend( flagArray.flagsG[j.number] ).addClass( "flag" );
        tablePosition = tablePosition + 3;
    }
    ;
}

///Generates flag array for use when drawing teams. Flags for display in tables
function generate_flags( zone ) {
    var flagArray = [ ];
    if ( zone == 'euro' || zone == 'euro16' ) {
        numTeams = 33;
    } else if ( zone == 'world' ) {
        numTeams = 80;
    }

    if ( zone == 'euro16' ) {
        zone = 'euro';
    }
    //create image for use in flag constructor.
    createImage = function ( src, title ) {
        img = new Image();
        img.src = src;
        img.alt = title;
        img.title = title;

        return img;
    };
    //  push two images to the array
    for ( flags = 0; flags <= numTeams; flags++ ) {
        flagArray.push( createImage( "/pesdraw1/pesdraw/images/" + zone + "Flags/" + [ flags ] + ".png" ) );
    }

    this.flagsG = flagArray;
}

//button functions
function buttons() {

    //reset button function
    this.reset = function () {
        if ( zone == 'euro' ) {
            drawfull.drawEuro(); //re-run draw
        } else if ( zone == 'euro16' ) {
            drawfull.drawEuro2016();
        } else {
            drawfull.drawWorld();
        }

        jQuery( 'td' ).removeClass( "red" );
        jQuery( 'td.table' ).addClass( "hide" );
        element = 0;
        elementCounter = 0;
        //jQuery( 'select' ).hide();
        //jQuery( '#pickTeam' ).show();
        this.createSelect();
        jQuery( "#teamPicked" ).hide();
        pickedTeams = [ ]; // reset picked teams array as it was causing issues if not
        if ( window.matchMedia( '(max-width: 370px)' ).matches ) {
            jQuery( "html, body" ).animate( { scrollTop: 0 }, 300 );
        }
    }

    //create select button
    this.createSelect = function () {
        jQuery( "#pickTeam" ).hide();
        jQuery( "select" ).show();
        var options = '<option value="blank">Pick team</option>';
        for ( var i = 0; i < drawfull.allTeams.length; i++ ) {
            options += '<option value=' + drawfull.allTeams[i].number + ' data-image="images/euroFlags/"' + [ i ] + '>' + drawfull.allTeams[i].name + '</option>'
        }
        ;
        jQuery( 'select' ).html( options );
    }
}

function utils() {

    this.randNumber = function ( max ) {
        var rndNumb;
        rndNumb = Math.floor( ( Math.random() * max ) + 1 );
        return rndNumb;
    }

    this.shuffle = function ( array ) {
        var currentIndex;
        var randomIndex;
        var temporaryValue;

        currentIndex = array.length,
            temporaryValue, randomIndex;

        //while elements remain to be shuffled
        while ( 0 !== currentIndex ) {
            // pick a remaining element
            randomIndex = Math.floor( Math.random() * currentIndex );
            currentIndex -= 1;

            //Swap it with current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    this.getScreenSize = function () {

        screenWidthSize = $( window ).width()

        if ( screenWidthSize >= 730 ) {
            screenWidth = true;
        } else {
            screenWidth = false;
        }
        return screenWidth;
    }

    //used for table positions for teams not in draw
    this.randTablePos = function ( min, max ) {
        rndTabPos = Math.floor( ( Math.random() * ( max - min + 1 ) ) + min );
        return rndTabPos;
    }

    this.sortSeedGroups = function ( seed1, seed2, seed3, seed4, allTeamsArray ) {
        for ( var i = 0; i <= allTeamsArray.length - 1; i++ ) {
            var seed = allTeamsArray[i].seedGroup;
            if ( seed == 1 ) {
                seed1.push( allTeamsArray[i] );
            } else if ( seed == 2 ) {
                seed2.push( allTeamsArray[i] );
            } else if ( seed == 3 ) {
                seed3.push( allTeamsArray[i] );
            } else if ( seed == 4 ) {
                seed4.push( allTeamsArray[i] );
            }
        }
    }

    this.sortArrays = function ( array ) {
        array.sort( function ( a, b ) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return ( nameA < nameB ) ? -1 : nameA > nameB ? 1 : 0;
        } );
    }
}

function displayDraw( seeds ) {

    this.drawAllTeams = function () {
        jQuery( "select" ).hide();
        jQuery( 'td' ).removeClass( "hide" );
        jQuery( '#pickTeam' ).hide();
        jQuery( '#teamPicked' ).show().html( 'Draw complete' );
        if ( zone == 'world' ) {
            element = 32;
        } else {
            element = 16;
        }
    }

    this.drawIndividual = function () {
        jQuery( "select" ).hide();
        jQuery( '#pickTeam' ).hide();
        jQuery( '#teamPicked' ).show().html( 'Draw in progress' );
        jQuery( 'td:eq(' + element + ')' ).removeClass( "hide" );

        if ( zone == 'euro' ) {
            elementCounter++;
            element = element + 4;
            if ( elementCounter == 4 ) {
                element = 1;
            } else if ( elementCounter == 8 ) {
                element = 2;
            } else if ( elementCounter == 12 ) {
                element = 3;
            }

            if ( element >= 16 ) { //show team picked on button
                jQuery( '#teamPicked' ).show().html( 'Draw complete' );
            }
            return elementCounter;
        } else if ( zone == 'euro16' ) {
            elementCounter++;
            element = element + 4;
            if ( elementCounter == 6 ) {
                element = 1;
            } else if ( elementCounter == 12 ) {
                element = 2;
            } else if ( elementCounter == 18 ) {
                element = 3;
            }
            if ( element >= 24 ) { //show team picked on button
                jQuery( '#teamPicked' ).show().html( 'Draw complete' );
            }
            return elementCounter;
        } else if ( zone == 'world' ) {
            jQuery( "select" ).hide();
            jQuery( '#pickTeam' ).hide();
            jQuery( '#teamPicked' ).show().html( 'Draw in progress' );
            jQuery( 'td:eq(' + element + ')' ).removeClass( "hide" );

            if ( screenWidth == true ) {
                elementCounter++;
                element = element + 4;
                if ( elementCounter == 8 ) {
                    element = 1;
                } else if ( elementCounter == 16 ) {
                    element = 2;
                } else if ( elementCounter == 24 ) {
                    element = 3;
                }
                if ( element >= 32 ) { //show team picked on button
                    jQuery( '#teamPicked' ).show().html( 'Draw complete' );
                }
                ;
                return elementCounter;
            }
        }
    }

    this.displayseed = function ( seeds ) {
        for ( i = 0; i < seeds.length; i++ ) {
            seedTeam = seeds[i];
            jQuery( '.seed_display' ).find( 'td' ).eq( i ).text( seedTeam );
        }
    }
}