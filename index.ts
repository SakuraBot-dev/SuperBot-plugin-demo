import { ctx } from '../../res/core/ctx'

export default (ctx: ctx) => {
  ctx.command(/\/hello/, '/hello', 'Hello,World!', (m, source, message, reply) => {
    if (source === 'OneBot') reply(ctx.OneBot.getBuilder().at(message.sender.user_id).text('world!'))
    if (source === 'telegram') reply('world!')
  })
}
