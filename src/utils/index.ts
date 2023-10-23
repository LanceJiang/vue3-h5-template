export const isMobile = () => {
  const reg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return reg.test(navigator.userAgent);
};

/**
 * 提取深层数据的值 (防止中间项 不存在导致的报错)
 * @param obj 【检测对象】
 * @param keyArr 【需要获取该对象内部数据key数组】
 * @returns {*}
 */
export function getDeepValue(
  obj: object | string[] | any,
  keyArr: (string | number)[]
) {
  return keyArr.reduce((acc, key) => acc && acc[key], obj);
}
export function getDpxToVw(number: number) {
  return `${((number / 1920) * 100).toFixed(5)}vw`;
}
export function getMpxToVw(number: number) {
  return `${((number / 375) * 100).toFixed(5)}vw`;
}
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟毫秒数
 * @param immediate true/false (是/否)即执行
 */
export function debounce(func: () => any, wait: number, immediate?: boolean) {
  let timeout: any;

  return function () {
    /* eslint-disable */
        // @ts-ignore
        const context = this
        const args: any = arguments
        /* eslint-enable */
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * 异步操作避免重复触发加锁
 * @param syncFunc
 * @returns {(function(...[*]): Promise<void>)|*}
 */
export function asyncHandlerLockWrap(syncFn: () => any) {
  let is_lock = false;
  /* eslint-disable */
    // @ts-ignore
    return async function (...args) {
        // @ts-ignore
        const context = this
        if (!is_lock) {
            is_lock = true
            Promise.resolve()
                // @ts-ignore
                .then(syncFn.bind(context, ...args))
                .finally(() => {
                    is_lock = false
                })
        }
    }
    /* eslint-enable */
}
