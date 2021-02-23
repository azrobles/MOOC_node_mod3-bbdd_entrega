const {User, Score} = require("./model.js").models;

exports.list = async (rl) => {

  let scores = await Score.findAll({
    include: [{ model: User, as: 'user' }],
    order: [["wins", "DESC"]]
  });
  scores.forEach(
    s => rl.log(`  ${s.user.name}|${s.wins}|${s.createdAt.toUTCString()}`)
  );
}