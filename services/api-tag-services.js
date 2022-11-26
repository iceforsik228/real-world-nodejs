const httpStatus = require('http-status');
const Tag = require('../models/tag');

const getTagsService = async () => {
  const tags = await Tag.find();
  if (!tags) {
    throw new Error(httpStatus.NOT_FOUND, 'tags not found');
  }
  return tags;
};

const createTagService = async (name) => {
  const tag = new Tag({ name });
  return await tag.save();
};

module.exports = { getTagsService, createTagService };
