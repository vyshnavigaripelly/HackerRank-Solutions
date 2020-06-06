this.removeDuplicates = function (head) {
    if (head == null || head.next == null) return head;
    if (head.data == head.next.data) {
        head.next = head.next.next;
        this.removeDuplicates(head);
    } this.removeDuplicates(head.next)
    return head;
}