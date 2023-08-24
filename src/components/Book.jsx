const Book = () => (
  <>
    <div id="wrapper" className="border border-gray flex flex-row bg-white justify-evenly">
      <div id="firstThird">
        <div>
          <p>Action</p>
          <h2>The Hunger Games</h2>
          <p>Suzanne Collins</p>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <button type="button">Comments</button>
          </div>
          <div>|</div>
          <div>
            <button type="button">Remove</button>
          </div>
          <div>|</div>
          <div>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row" id="secondThird">
        <img src="#" alt="book cover" />
        <div className="flex flex-col justify-center items-center">
          <h1>64%</h1>
          <h2>Completed</h2>
        </div>
      </div>

      <div className="font-serif" id="lastThird">
        <h3 className="text-gray-300">CURRENT CHAPTER</h3>
        <p>Chapter 17</p>
        <button className="text-white bg-blue-500 rounded p-2" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </>
);
export default Book;
