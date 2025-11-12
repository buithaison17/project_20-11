import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const Header = () => {
  return (
    <div className="sticky left-0 top-0 z-30 flex items-center justify-between px-8 p-5 bg-[#FBFAF9]">
      <div className="flex items-center gap-3">
        <AutoStoriesIcon
          className="text-[#8B5E3C]"
          fontSize="large"
        ></AutoStoriesIcon>
        <div className="text-2xl font-semibold text-[#8B5E3C]">
          Thầy Giáo Vùng Cao
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="cursor-pointer hover:underline">Câu chuyện</div>
        <div className="cursor-pointer hover:underline">Học trò</div>
        <div className="cursor-pointer hover:underline">Khoảnh khắc</div>
        <div className="cursor-pointer hover:underline">Tri ân</div>
      </div>
    </div>
  );
};
