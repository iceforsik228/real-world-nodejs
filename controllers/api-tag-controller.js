const { getTagsService, createTagService } = require('../services/api-tag-services');

const getTags = async (req, res) => {
  const tags = await getTagsService();
  res.status(200).json(tags);
};

const createTag = async (req, res) => {
  const { name } = req.body;
  const tag = await createTagService(name);
  res.status(201).json(tag);
};

module.exports = { getTags, createTag };
