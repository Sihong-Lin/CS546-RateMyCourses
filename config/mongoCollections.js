const dbConnection = require('./mongoConnection');

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = (collection) => {
    let _col = undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection.connectToDb();
            _col = await db.collection(collection);
        }
        return _col;
    };
};

/*
  Three collections are created for:
    - users
    - courses, with course review
    - professors, with professor review
*/
module.exports = {
    users: getCollectionFn('users'),
    courses: getCollectionFn('courses'),
    professors: getCollectionFn('professors'),
    courseReview: getCollectionFn('courseReview'),
    professorReview: getCollectionFn('professorReview')
};
