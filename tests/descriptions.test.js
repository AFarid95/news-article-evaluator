import { descriptions } from '../src/client/js/descriptions'

test('Descriptions object has valid values', () => {
    const keys = ['score_tag', 'agreement', 'subjectivity', 'irony']
    for (let key of keys) {
        expect(descriptions[key].sentenceBeginning).toBeDefined()
        expect(descriptions[key].values).toBeDefined()
        expect(descriptions[key].sentenceEnd).toBeDefined()
    }
})