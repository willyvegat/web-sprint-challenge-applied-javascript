const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  header.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  return header;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = Header('Bloomtech Times', 'October 6, 2022', '80 degrees');
  document.querySelector(selector).appendChild(header);
}

export { Header, headerAppender }
