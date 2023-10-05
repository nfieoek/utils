 // 非空链表逆序相加
 var addTwoNumbers = function(l1, l2) {

   // /**
   //  * 第一版
   // * */
   //   let sum = new ListNode('0') // 创建一个头链表用于保存结果
   //   let head = sum // 保存头链表的位置用于最后的链表返回
   //   while (l1 || l2) {//在两个链表之中有一个存在的前提下执行下面的逻辑
   //       let val1 = l1.val
   //       let val2 = l2.val
   //       let r1 = val1 + val2//求和
   //       sum.next = new ListNode(r1 % 10)//sum的下一个节点
   //       sum = sum.next //sum指向下一个节点
   //       if (l1) l1 = l1.next //l1指向下一个节点，以便计算第二个节点的值
   //       if(l2) l2 = l2.next //l2指向下一个节点，以便计算第二个节点的值
   //   }
   //   return head.next //返回计算结果，之所以用head.next是因为head中保存的第一个节点是刚开始定义的“0”
   //
   //


     /**
      * 第二版
     * */
     let addOne = 0 //进位
       let sum = new ListNode('0') // 创建一个头链表用于保存结果
       let head = sum // 保存头链表的位置用于最后的链表返回
       while (addOne||l1 || l2) {//在两个链表之中有一个存在的前提下执行下面的逻辑
           let v1 = l1 !== null ? l1.val : 0 // 优化点
           let v2 = l2 !== null ? l2.val : 0 //优化点
           let r1 = v1 + v2 +addOne//求和
           addOne = r1 >= 10 ? 1 : 0 // 如果求和结果>=10，那么进位为1，否则为0
           sum.next = new ListNode(r1 % 10)//sum的下一个节点
           sum = sum.next //sum指向下一个节点
           if (l1) l1 = l1.next //l1指向下一个节点，以便计算第二个节点的值
           if(l2) l2 = l2.next //l2指向下一个节点，以便计算第二个节点的值
       }
       return head.next //返回计算结果，之所以用head.next是因为head中保存的第一个节点是刚开始定义的“0”




 };
