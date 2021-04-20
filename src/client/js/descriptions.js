const descriptions = {
    score_tag: {
        sentenceBeginning: 'The text ',
        values: {
            'P+': 'is strongly positive',
            'P': 'is positive',
            'NEU': 'has neutral polarity',
            'N': 'is negative',
            'N+': 'is strongly negative',
            'NONE': 'has no polarity'
        },
        sentenceEnd: '.'
    },
    agreement: {
        sentenceBeginning: 'There is ',
        values: {
            'AGREEMENT': 'agreement',
            'DISAGREEMENT': 'disagreement'
        },
        sentenceEnd: ' between different parts of the text.'
    },
    subjectivity: {
        sentenceBeginning: 'The text is ',
        values: {
            'OBJECTIVE': 'objective',
            'SUBJECTIVE': 'subjective'
        },
        sentenceEnd: '.'
    },
    irony: {
        sentenceBeginning: 'The text is ',
        values: {
            'NONIRONIC': 'non-ironic',
            'IRONIC': 'ironic'
        },
        sentenceEnd: '.'
    }
}

export { descriptions }