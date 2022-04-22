const bands = require('./data/bands');
const albums = require('./data/albums');
const connection = require('./config/mongoConnection');
const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    
    let band1 = undefined
    let bandToAddAlbum = undefined

    console.log("1. Create a band)"); 
    try {
        band1 = await bands.create("Pink Floyd", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "http://www.pinkfloyd.com", "EMI", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1965);
        console.log('First band has added');
        let band2 = await bands.create("bbb Floyd", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "http://www.pinkfloyd.com", "EMI", ["sss Waters", "ddd Gilmour", "aaa Mason", "Richard ddd", "Sid Barrett" ], 1999);
        bandToAddAlbum = band1._id;
        console.log(band1);
      } catch (e) {
        console.log(e);
    }
    let albumsToRemove = undefined
    console.log("2. add Album");
    try {
        await albums.create(bandToAddAlbum, "Wish You Were Here", "09/12/1975",["Shine On You Crazy Diamond, Pts. 1-5", "Welcome to the Machine","Have a Cigar (Ft. Roy Harper)", "Wish You Were Here","Shine On You Crazy Diamond, Pts. 6-9"],5)
        albumsToRemove = await albums.create(bandToAddAlbum, "Wish You Were Suck", "09/12/2022",["Shame On You Crazy Diamond, pig. 1-6", "Welcome to cs 546","Have a dick (Ft. Roy Harper)", "Wish You Were Here","Shine On You Crazy Diamond, Pts. 6-9"],1.3)
    } catch (e) {
        console.log(e);
    }

    console.log("3. get All Album");
    try {
        res2 = await albums.getAll(bandToAddAlbum)
        console.log(res2);
    } catch (e) {
        console.log(e);
    }
    /*console.log("4. delete Album");
    try {
        res3 = await albums.remove(albumsToRemove._id)
        console.log(res3);
    } catch (e) {
        console.log(e);
    }*/
    await connection.closeConnection();
    console.log('Done!');
    
}

main();