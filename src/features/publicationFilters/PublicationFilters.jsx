import React from 'react';

const PublicationFilters = ({
  publicaciones,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange
}) => {
  const categories = [...new Map(
    publicaciones.map(p => [p.Category?.ID_Category, p.Category?.CategoryName])
  )].map(([id, name]) => ({ id, name }));

  const subcategories = [
    ...new Map(
      publicaciones
        .filter(p => p.Category?.ID_Category === parseInt(selectedCategory))
        .map(p => [p.SubCategory?.ID_SubCategory, p.SubCategory?.NameSubCategory])
    )
  ].map(([id, name]) => ({ id, name }));

  return (
    <aside className="w-64 sticky top-20 self-start">
      <div className="mb-4">
        <label className="block mb-1">Categoría</label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            onCategoryChange(e.target.value);
            onSubcategoryChange(''); // Reset subcategoría
          }}
          className="w-full p-2 rounded text-black"
        >
          <option value="">Todas</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Subcategoría</label>
        <select
          value={selectedSubcategory}
          onChange={(e) => onSubcategoryChange(e.target.value)}
          className="w-full p-2 rounded text-black"
          disabled={!selectedCategory}
        >
          <option value="">Todas</option>
          {subcategories.map(sub => (
            <option key={sub.id} value={sub.id}>{sub.name}</option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default PublicationFilters;
