function luasPersegi(p){
    return p * p
}

function kelilingPersegi(p){
    return 4 * p
}

function luasSegitiga(p){
    return p*Math.sqrt((p ** 2 - (p / 2) ** 2))
}

function kelilingSegitiga(p){
    return p * 3
}

function luasLingkaran(diameter){
  return 22 / 7 * (diameter/2) ** 2 
}

function kelilingLingkaran(diameter){
    return 22/7 * diameter
}

module.exports = {
    luasPersegi,
    kelilingPersegi,
    luasSegitiga,
    kelilingSegitiga,
    luasLingkaran,
    kelilingLingkaran,
};
