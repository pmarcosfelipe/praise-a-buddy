import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../repositories/TagsRepository';

class ListTagService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return tags;
  }
}

export { ListTagService };
