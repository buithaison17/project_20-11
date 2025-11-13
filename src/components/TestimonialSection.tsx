import StarIcon from "@mui/icons-material/Star";

export const TestimonialSection = () => {
  return (
    <div
      id="student"
      className="scroll-mt-10 w-full max-w-full overflow-hidden p-12 flex flex-col gap-6 justify-center items-center"
    >
      <div
        data-aos="zoom-in"
        className="text-3xl font-semibold text-[#8B5E3C] font-merriweather text-center text max-sm:text-xl"
      >
        Lời tri ân
      </div>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
        <div className="hover:scale-110 transition-all duration-150">
          <div
            data-aos="zoom-in-right"
            className="flex flex-col gap-3 bg-gradient-to-br from-[#FBF4E6] to-[#E3F0E0]  p-3 rounded-xl shadow-md border"
          >
            <div className="flex gap-3 items-center">
              <img
                src="http://localhost:5173/src/assets/images/story5.png"
                alt=""
                className="size-16 border-[5px] shadow-md border-white rounded-full object-center object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className="text-xl font-semibold text-[#8B5E3C]">
                  Nguyễn Thị Mai
                </div>
                <div className="text-[#4B5563]">Giáo viên tiểu học</div>
              </div>
            </div>
            <div className="italic text-[#4B5563]">
              "Thầy Minh là người thắp sáng ước mơ của em. Nhờ thầy, em biết
              rằng tri thức có thể thay đổi vận mệnh. Giờ em cũng đang truyền
              lửa đó cho thế hệ sau."
            </div>
            <div className="flex items-center">
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
            </div>
          </div>
        </div>
        <div className="hover:scale-110 transition-all duration-150">
          <div
            data-aos="zoom-in-up"
            className="flex flex-col gap-3 bg-gradient-to-br from-[#FBF4E6] to-[#E3F0E0]  p-3 rounded-xl shadow-md border"
          >
            <div className="flex gap-3 items-center">
              <img
                src="http://localhost:5173/src/assets/images/story5.png"
                alt=""
                className="size-16 border-[5px] shadow-md border-white rounded-full object-center object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className="text-xl font-semibold text-[#8B5E3C]">
                  Nguyễn Thị Mai
                </div>
                <div className="text-[#4B5563]">Giáo viên tiểu học</div>
              </div>
            </div>
            <div className="italic text-[#4B5563]">
              "Thầy Minh là người thắp sáng ước mơ của em. Nhờ thầy, em biết
              rằng tri thức có thể thay đổi vận mệnh. Giờ em cũng đang truyền
              lửa đó cho thế hệ sau."
            </div>

            <div className="flex items-center">
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
            </div>
          </div>
        </div>
        <div className="hover:scale-110 transition-all duration-150">
          <div
            data-aos="zoom-in-left"
            className="flex flex-col gap-3 bg-gradient-to-br from-[#FBF4E6] to-[#E3F0E0]  p-3 rounded-xl shadow-md border"
          >
            <div className="flex gap-3 items-center">
              <img
                src="http://localhost:5173/src/assets/images/story5.png"
                alt=""
                className="size-16 border-[5px] shadow-md border-white rounded-full object-center object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className="text-xl font-semibold text-[#8B5E3C]">
                  Nguyễn Thị Mai
                </div>
                <div className="text-[#4B5563]">Giáo viên tiểu học</div>
              </div>
            </div>
            <div className="italic text-[#4B5563]">
              "Thầy Minh là người thắp sáng ước mơ của em. Nhờ thầy, em biết
              rằng tri thức có thể thay đổi vận mệnh. Giờ em cũng đang truyền
              lửa đó cho thế hệ sau."
            </div>
            <div className="flex items-center">
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
              <StarIcon fontSize="small" className="text-[#F2C57C]"></StarIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
