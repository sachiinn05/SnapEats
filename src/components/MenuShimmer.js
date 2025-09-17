// MenuShimmer.jsx
const MenuShimmer = () => {
  return (
    <div className="menu-shimmer">
      <div className="shimmer-title"></div>
      <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
         <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
         <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>

      <div className="shimmer-subtitle"></div>
   
      <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
         <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
         <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
    
      <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
         <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
         <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>
      <div className="shimmer-subtitle"></div>


      {[...Array(6)].map((_, index) => (
        <div key={index} className="shimmer-item"></div>
      ))}
    </div>
  );
};

export default MenuShimmer;
