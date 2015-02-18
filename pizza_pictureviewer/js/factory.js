//data access
appNameMy.factory('nameFactory', function() {
    var customersFactory = [
        {imgUrl: 'testDB/01.png', city: 'new york'},
        {imgUrl: 'testDB/02.png', city: 'bew work'},
        {imgUrl: 'testDB/03.png', city: 'new york'},
        {imgUrl: 'testDB/01.png', city: 'new york'},
        {imgUrl: 'testDB/02.png', city: 'bew work'},
        {imgUrl: 'testDB/03.png', city: 'new york'}
    ];
    var posters = [
        {imgUrl: 'testDB/posters/dongwu_001.png', city: 'new york'},
        {imgUrl: 'testDB/posters/dongwu_002.png', city: 'bew work'},
        {imgUrl: 'testDB/posters/dongwu_003.png', city: 'new york'}
    ];
    var borders=[{imgUrl: 'testDB/borders/tl.png', city: 'new york'},
                {imgUrl: 'testDB/borders/ht.png', city: 'new york'},
                {imgUrl: 'testDB/borders/tl.png', city: 'new york'},
                {imgUrl: 'testDB/borders/vl.png', city: 'new york'},
                {imgUrl: 'testDB/borders/bl.png', city: 'new york'},
                {imgUrl: 'testDB/borders/br.png', city: 'new york'}
    ];
    var armor_layer01 = [
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00004.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00005.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00006.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00007.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00008.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00009.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00010.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/armor_0walk/a_00011.png'}       
    ];
    
    var weapons_layer02 = [
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00004.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00005.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00006.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00007.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00008.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00009.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00010.png'},
        {imgUrl: 'testDB/character/hero/strelokHorse/weapon_0walk/a_00011.png'}       
    ];
    var factory1 = {};
    
    factory1.getCustomers = function() {
        return customersFactory;
    };
    
    factory1.getPosters = function (){
        return  posters;
    };
    
    factory1.getArmor_layer01 = function (){
        return  armor_layer01;
    };
    
    factory1.getWeaponsLayer02 = function (){
        return  weapons_layer02;
    };
    
    factory1.putCustomer = function putCustomer(customerPutName) {
        customersFactory.push({name: customerPutName, city: 'someCity'});
    };
    
    factory1.getBorder = function (){
        return borders;
    };
    return factory1;
});


