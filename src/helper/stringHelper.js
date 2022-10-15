import moment from 'moment';

class StringHelper {
  static dateTimeForInput(date) {
    return moment(date).format('YYYY-MM-DDTkk:mm');
  }

  static dateTimeNow() {
    return moment().format('YYYY-MM-DDTkk:mm');
  }

  static replaceWithSpace(words, pattern) {
    return words.replace(pattern, ' ');
  }
}

export default StringHelper;
