// 贪心 + 优先队列
/**
 * 根据结束时间从小到大进行排序，保证优先加入先结束的课程
 * 1、若当前时间 total + 课程持续时间 <= 课程最晚结束时间，则该课程可加入
 * 2、若当前时间 total + 课程持续时间 > 课程最晚结束时间，则该课程不可加入
 *    此时需要回退，找到已学课程中持续时间比当前课程持续时间长的课程进行替换，使 total 减少以学习更多课程
 */
var scheduleCourse = function (courses) {
    courses.sort((a, b) => {
        return a[1] - b[1];
    })
    let total = 0;
    let list = new PriorityQueue();
    for (let course of courses) {
        let dur = course[0],
            last = course[1];
        // 直接加入
        if (total + dur <= last) {
            total += dur;
            list.offer(dur);
        } else if (list.size > 0 && list.peek() > dur) {
            let d = list.poll();
            list.offer(dur);
            total = total - d + dur;
        }
    }
    return list.size;
}

class PriorityQueue {
    constructor() {
        this.data = [];
        this.size = 0;

    }
    peek() {
        return this.size > 0 ? this.data[0] : null;
    }
    offer(val) {
        this.data.push(val);
        this.upShift(this.size++);
    }
    poll() {
        if (this.size === 0)
            return;
        this.swap(0, --this.size);
        this.downShift(0);
        return this.data.pop();
    }
    upShift(index) {
        let j = index;
        let i = Math.floor((j - 1) / 2);
        let temp = this.data[j];
        while (j > 0) {
            if (this.data[i] >= temp)
                break;
            else {
                this.data[j] = this.data[i];
                j = i;
                i = Math.floor((j - 1) / 2);
            }
        }
        this.data[j] = temp;
    }
    downShift(index) {
        let i = index;
        let j = 2 * i + 1;
        let temp = this.data[i];
        while (j <= this.size - 1) {
            if (j < this.size - 1 && this.data[j] < this.data[j + 1])
                ++j;
            if (this.data[j] <= temp)
                break;
            else {
                this.data[i] = this.data[j];
                i = j;
                j = 2 * i + 1;
            }
        }
        this.data[i] = temp;
    }
    swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}