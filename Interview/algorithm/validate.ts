/**
 * 判断对象是否存在循环引用，该思想还可用于链表，二叉树等的判断
 *
 * @param {object} target 需要判断的对象
 * @returns
 */
function validateCircularRefrence(target: Object) {
  const q: Array<any> = [];
  /**保存访问当前节点的路径，并判断当前节点是否与路径上的节点是否属于同一个实例 */
  return (function dfs(origin: any) {
    if (!origin) return;
    for (let parent of q) {
      if (typeof origin === 'object' && parent === origin) {
        return true;
      }
    }
    q.push(origin);
    if (typeof origin === 'object') {
      Object.keys(origin).forEach(key => {
        dfs(origin[key]);
      });
    }
    q.pop();
  })(target);
}
