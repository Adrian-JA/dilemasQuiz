const results = [
    {
        question: 1,
        voteYes: 0,
        voteNo: 0,
    },
    {
        question: 2,
        voteYes: 0,
        voteNo: 0,
    },
    {
        question: 3,
        voteYes: 0,
        voteNo: 0,
    },
];

function saveResults(result) {
    result.forEach((result, index) => {
        if (result.select === 0) results[index].voteYes++;

        if (result.select === 1) results[index].voteNo++;
    });

    return results;
}

module.exports = { saveResults };
