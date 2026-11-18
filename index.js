/** Services this plugin needs; it stays inactive in profiles without them. */
export const inject = ['tools']

const GREETINGS = {
  en: 'Hello, {name}!',
  zh: '你好，{name}！',
  es: '¡Hola, {name}!',
  ja: 'こんにちは、{name}！',
}

export function apply(ctx) {
  ctx.tools.register({
    name: 'greet',
    description: 'Return a friendly greeting for a person. Use it to greet someone by name, optionally in a chosen language.',
    parameters: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Name of the person to greet.' },
        language: { type: 'string', description: 'Optional language code such as "en", "zh", "es", or "ja". Defaults to "en".' },
      },
      required: ['name'],
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          message: { type: 'string', description: 'The greeting message.' },
        },
        required: ['message'],
      },
      render: (_args, value) => [{ type: 'text', text: value.message }],
    },
    async execute(args) {
      const source = args && typeof args === 'object' ? args : {}
      const language = typeof source.language === 'string' ? source.language : 'en'
      const name = typeof source.name === 'string' && source.name.trim() ? source.name.trim() : 'friend'
      const template = GREETINGS[language] ?? GREETINGS.en
      return { message: template.replace('{name}', name) }
    },
  })
}
