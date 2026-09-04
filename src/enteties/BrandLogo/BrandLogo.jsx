const BrandLogo = (brand) => {
  return (
    <div key={brand.id} className="">
      <img
        src={`./${brand.brand}.svg`}
        alt="brand image"
        width={80}
        height={80}
      />
      <h3 className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-lg">
        {brand.brand}
      </h3>
    </div>
  );
};

export default BrandLogo;
