// 现在超时了。。。
var mergeKLists = function (lists) {
    if (lists.length === 0)
        return null;
    let head = new ListNode(-1);
    head.next = lists[0];
    let pre = head,
        list1 = head.next;
    for (let i = 1; i < lists.length; ++i) {
        let list2 = lists[i];
        while (list1 !== null && list2 !== null) {
            if (list1.val > list2.val) {
                let s = list2.next;
                pre.next = list2;
                list2.next = list1;
                list2 = s;
                pre = pre.next;
            } else {
                pre = list1;
                list1 = list1.next;
            }
        }
        if (list2 !== null) {
            pre.next = list2;
        }
        list1 = head.next;
    }
    return head.next;
};

// 分治思想
var mergeKLists = function (lists) {
    if (lists.length === 0)
        return null;
    while (lists.length > 1) {
        let tempLists = [];
        let i = 0;
        while (i + 1 < lists.length) {
            let list1 = lists[i];
            let list2 = lists[i + 1];
            i += 2;
            let head = new ListNode(-1);
            let pre = head;
            head.next = list1;
            while (list1 !== null && list2 !== null) {
                if (list1.val > list2.val) {
                    let s = list2.next;
                    pre.next = list2;
                    list2.next = list1;
                    list2 = s;
                    pre = pre.next;
                } else {
                    pre = list1;
                    list1 = list1.next;
                }
            }
            if (list2 !== null) {
                pre.next = list2;
            }
            tempLists.push(head.next);
        }
        if (i < lists.length) {
            tempLists.push(lists[i]);
        }
        lists = [...tempLists];
    }
    return lists[0];
};