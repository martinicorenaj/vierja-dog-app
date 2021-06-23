import React from 'react'
const Filter=({showFilter, handleSearchChange})=>
<div>
  <p>filtro de raza</p>
  <input value={showFilter}
         onChange={handleSearchChange}
  />
</div>
export default Filter