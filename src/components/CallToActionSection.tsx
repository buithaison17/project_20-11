import FavoriteIcon from "@mui/icons-material/Favorite";

export const CallToActionSection = () => {
  return (
    <div className="w-full max-w-full overflow-hidden p-12 flex flex-col gap-6 justify-center items-center bg-[#8E6241]">
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
        Hãy Gửi Lời Tri Ân Thầy Cô Hôm Nay
      </div>
      <div
        data-aos="fade-right"
        className="text-[#E9BC77] font-semibold w-[600px] text-center font-roboto"
      >
        Ngày 20/11 - Một dịp để chúng ta bày tỏ lòng biết ơn sâu sắc đến những
        người thầy đã dành cả cuộc đời để gieo chữ
      </div>
      ss
    </div>
  );
};
