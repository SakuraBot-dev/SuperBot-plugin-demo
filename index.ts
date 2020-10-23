import { commander, bot, config, api } from '../../lib/api';

commander.reg({
  // 正则表达式，匹配命令
  cmd: /^.echo (.*)/,
  // 帮助文本
  helper: '.echo <text>   echo',
  // 私聊消息
  private: true,
  // 群聊消息
  group: true,
  // 需要全局管理员
  globalAdmin_require: false,
  // 需要群组管理员
  groupAdmin_require: false,
  // 需要主人
  owner_require: false
}, (m: Array<string>, e: any, reply: Function) => {
  // 触发后执行的函数
  reply(m[1], false);
});

bot.on('group_message', (msg) => {
  // 收到群消息
});

bot.on('poke', (msg) => {
  // 被戳了就戳回去
  api.http.OneBot.message.sendGroupMsg(msg.group_id, `[CQ:poke,qq=${msg.user_id}]`, false);
})