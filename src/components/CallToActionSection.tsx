import FavoriteIcon from "@mui/icons-material/Favorite";

export const CallToActionSection = () => {
  return (
    <div
      id="wishes"
      className="scroll-mt-10 w-full max-w-full overflow-hidden p-12 flex flex-col gap-6 justify-center items-center bg-[#8E6241]"
    >
      <div data-aos="zoom-in">
        <FavoriteIcon
          className="text-[#F2C57C]"
          fontSize="large"
        ></FavoriteIcon>
      </div>
      <div
        data-aos="fade-down"
        className="text-3xl font-semibold text-white font-merriweather text-center"
      >
        Hãy Gửi Lời Tri Ân Thầy Cô Của Bạn Ngay Hôm Nay
      </div>
      <div
        data-aos="fade-right"
        className="text-[#E9BC77] font-semibold w-[600px] text-center font-roboto max-sm:w-[350px]"
      >
        Ngày 20/11 - Một dịp để chúng ta bày tỏ lòng biết ơn sâu sắc đến những
        người thầy đã dành cả cuộc đời để gieo chữ
      </div>
      <form
        data-aos="fade-left"
        className="w-[600px] p-3 rounded-md bg-[#c78b5d] flex flex-col gap-3 max-sm:w-[300px]"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-white">
            Tên của bạn
          </label>
          <input
            type="text"
            placeholder="Nhập tên của bạn"
            className="px-3 py-1 rounded outline-none border hover:border-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="student" className="text-white">
            Lớp
          </label>
          <input
            id="student"
            type="text"
            placeholder="Nhập tên của bạn"
            className="px-3 py-1 rounded outline-none border hover:border-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-white">
            Lời chúc của bạn
          </label>
          <textarea
            id="message"
            className="px-3 py-1 rounded outline-none border hover:border-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-3 justify-end">
          <button
            type="reset"
            className="px-3 py-1 bg-gray-500 rounded text-white"
          >
            Xóa tất cả
          </button>
          <button className="px-3 py-1 bg-blue-500 rounded text-white">
            Gửi lời chúc
          </button>
        </div>
      </form>
    </div>
  );
};
