// layoutController.js
const layouts = {}; // Sample in-memory storage for layouts

const saveLayout = (req, res) => {
  const { userId, layout } = req.body;
  layouts[userId] = layout;
  res.send({ message: 'Layout saved successfully', layout });
};

const getLayout = (req, res) => {
  const { userId } = req.params;
  const layout = layouts[userId] || {};
  res.send({ layout });
};

module.exports = { saveLayout, getLayout };
