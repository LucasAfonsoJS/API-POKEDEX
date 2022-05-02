const quantidade = document.getElementById('quantidade');
        quantidade.addEventListener('keyup',()=>{
            pegaPokemons(quantidade.value);
        })
        pegaPokemons(2);
        function pegaPokemons(quantidade) {
            fetch('https://pokeapi.co/api/v2/pokemon?offset=10&limit='+quantidade)
            .then(Response => Response.json())
            .then(allpokemon => {
                let pokemons = [];
                allpokemon.results.map((val)=>{

                    fetch(val.url)
                    .then(Response => Response.json())
                    .then(pokemonSingle =>{
                        pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
                        if (pokemons.length == quantidade) {

                            let  pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = '';
                            
                            pokemons.map(function(val) {

                                

                                pokemonBoxes.innerHTML+=`

                                <div class="pokemon-box">
                                    <img src="`+val.imagem+`" alt="">
                                    <p>`+val.nome+`</p>
                                </div><!--Pokemon-box-->
                                
                                `;
                            })
                        }
                    })

                })

            pokemons.map((val)=>{
                console.log(val.nome);
             })
        })
        }