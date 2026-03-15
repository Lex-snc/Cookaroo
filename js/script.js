// ─── DATA ───
const RECIPES = [
  {id:1,name:"Filipino Chicken Adobo",emoji:"🍗",image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format",tags:["Filipino","Savory"],time:"45 min",difficulty:"Easy",origin:"Philippines",filter:["filipino"],
   ingredients:[{name:"Chicken pieces",base:1.5,unit:"kg"},{name:"Soy sauce",base:120,unit:"ml"},{name:"White vinegar",base:80,unit:"ml"},{name:"Garlic cloves",base:8,unit:"pcs"},{name:"Bay leaves",base:4,unit:"pcs"},{name:"Black pepper",base:1,unit:"tsp"}],
   steps:["Combine soy sauce and vinegar in a large bowl.","Add chicken, garlic, and bay leaves. Marinate for 30 minutes.","Transfer to a pot and bring to a boil over medium-high heat.","Lower heat and simmer for 20 minutes until chicken is tender.","Increase heat to reduce sauce by half. Serve over steamed rice."]},
  {id:2,name:"Pad Thai",emoji:"🍜",image:"https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop&auto=format",tags:["Thai","15min"],time:"20 min",difficulty:"Medium",origin:"Thailand",filter:["international","15min"],
   ingredients:[{name:"Rice noodles",base:200,unit:"g"},{name:"Shrimp",base:200,unit:"g"},{name:"Eggs",base:3,unit:"pcs"},{name:"Bean sprouts",base:100,unit:"g"},{name:"Fish sauce",base:3,unit:"tbsp"},{name:"Tamarind paste",base:2,unit:"tbsp"}],
   steps:["Soak rice noodles in warm water for 20 minutes. Drain.","Heat wok over high heat with 2 tbsp oil.","Stir-fry shrimp for 2 minutes. Push to side.","Scramble eggs in the empty space.","Add noodles, fish sauce, and tamarind. Toss vigorously.","Add bean sprouts and serve with lime wedges."]},
  {id:3,name:"Vegan Buddha Bowl",emoji:"🥗",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format",tags:["Vegan","Low-Carb"],time:"25 min",difficulty:"Easy",origin:"International",filter:["vegan","lowcarb","international"],
   ingredients:[{name:"Quinoa",base:200,unit:"g"},{name:"Chickpeas (roasted)",base:240,unit:"g"},{name:"Avocado",base:1,unit:"pcs"},{name:"Cherry tomatoes",base:150,unit:"g"},{name:"Tahini",base:3,unit:"tbsp"},{name:"Lemon juice",base:2,unit:"tbsp"}],
   steps:["Cook quinoa in vegetable broth for 15 minutes.","Roast chickpeas at 200°C with cumin and paprika for 20 minutes.","Halve avocado and slice cherry tomatoes.","Whisk tahini with lemon juice and garlic to make dressing.","Assemble bowl: quinoa base, chickpeas, avocado, tomatoes.","Drizzle tahini dressing and serve."]},
  {id:4,name:"Beef Gyudon",emoji:"🥩",image:"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&auto=format",tags:["Japanese","Quick"],time:"18 min",difficulty:"Easy",origin:"Japan",filter:["japanese","15min"],
   ingredients:[{name:"Thinly sliced beef",base:300,unit:"g"},{name:"Onion",base:1,unit:"pcs"},{name:"Dashi stock",base:240,unit:"ml"},{name:"Soy sauce",base:3,unit:"tbsp"},{name:"Mirin",base:2,unit:"tbsp"},{name:"Sugar",base:1,unit:"tsp"}],
   steps:["Bring dashi, soy sauce, mirin, and sugar to a simmer.","Add sliced onion and cook until translucent, about 5 minutes.","Add beef in a single layer without stirring for 2 minutes.","Gently fold beef and simmer 3 more minutes.","Serve over steamed rice. Optionally top with a soft egg."]},
  {id:5,name:"Pasta Cacio e Pepe",emoji:"🍝",image:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop&auto=format",tags:["Italian","Vegetarian"],time:"20 min",difficulty:"Medium",origin:"Italy",filter:["italian"],
   ingredients:[{name:"Spaghetti",base:320,unit:"g"},{name:"Pecorino Romano",base:80,unit:"g"},{name:"Parmigiano",base:80,unit:"g"},{name:"Black pepper",base:2,unit:"tsp"},{name:"Pasta water",base:200,unit:"ml"},{name:"Salt",base:1,unit:"tsp"}],
   steps:["Cook spaghetti until al dente. Reserve 1 cup pasta water.","Toast black pepper in a dry pan until fragrant.","Combine grated cheeses in a bowl.","Add hot pasta water to cheese, stir to a smooth paste.","Toss pasta with pepper and cheese paste off the heat.","Add pasta water as needed for a creamy consistency."]},
  {id:6,name:"Keto Zucchini Lasagna",emoji:"🥒",image:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&auto=format",tags:["Low-Carb","Vegan","Healthy"],time:"55 min",difficulty:"Medium",origin:"International",filter:["vegan","lowcarb"],
   ingredients:[{name:"Zucchini (large)",base:3,unit:"pcs"},{name:"Ricotta cheese",base:250,unit:"g"},{name:"Marinara sauce",base:400,unit:"ml"},{name:"Mozzarella",base:200,unit:"g"},{name:"Fresh basil",base:20,unit:"g"},{name:"Olive oil",base:2,unit:"tbsp"}],
   steps:["Slice zucchini lengthwise into thin strips. Salt and pat dry.","Grill zucchini strips for 2 minutes each side.","Layer in baking dish: sauce, zucchini, ricotta, mozzarella.","Repeat layers, ending with mozzarella.","Bake at 180°C for 30 minutes until bubbling.","Rest for 10 minutes before slicing."]},
  {id:7,name:"Chicken Tikka Masala",emoji:"🍛",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&auto=format",tags:["Indian","Spicy"],time:"40 min",difficulty:"Medium",origin:"India",filter:["international"],
   ingredients:[{name:"Chicken breast",base:600,unit:"g"},{name:"Yogurt",base:150,unit:"g"},{name:"Tomato passata",base:400,unit:"ml"},{name:"Heavy cream",base:100,unit:"ml"},{name:"Garam masala",base:2,unit:"tsp"},{name:"Turmeric",base:1,unit:"tsp"}],
   steps:["Marinate chicken in yogurt and spices for 1 hour.","Grill or broil chicken until charred. Cut into chunks.","Sauté onion and garlic until golden in a large pan.","Add tomato passata and all spices. Simmer 15 minutes.","Add chicken pieces and cream. Simmer 10 more minutes.","Garnish with cilantro and serve with naan."]},
  {id:8,name:"Sinigang na Hipon",emoji:"🍤",image:"https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop&auto=format",tags:["Filipino","Sour"],time:"30 min",difficulty:"Easy",origin:"Philippines",filter:["filipino","international"],
   ingredients:[{name:"Tiger shrimp",base:500,unit:"g"},{name:"Tamarind broth mix",base:1,unit:"pack"},{name:"Eggplant",base:1,unit:"pcs"},{name:"Water kangkong",base:100,unit:"g"},{name:"Green chili",base:2,unit:"pcs"},{name:"Tomatoes",base:2,unit:"pcs"}],
   steps:["Bring 6 cups water with tomatoes to boil.","Add tamarind broth mix and stir until dissolved.","Add eggplant and simmer 5 minutes.","Add shrimp and cook 3-4 minutes until pink.","Add kangkong and chili. Cook 1 minute.","Season with fish sauce and serve hot."]}
];

const CLASSES = [
  {id:1,emoji:"🔪",image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format",title:"Knife Skills Masterclass",chef:"Chef Marco Rossi",duration:"42 min",level:1,locked:false,category:"Technique"},
  {id:2,emoji:"🥩",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&auto=format",title:"How to Perfectly Sear a Steak",chef:"Chef James Wellington",duration:"38 min",level:2,locked:true,category:"Meat"},
  {id:3,emoji:"🍜",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&auto=format",title:"Ramen from Scratch",chef:"Chef Yuki Tanaka",duration:"65 min",level:3,locked:true,category:"Asian"},
  {id:4,emoji:"🥐",image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&auto=format",title:"Classic French Pastry",chef:"Chef Marie Fontaine",duration:"55 min",level:3,locked:true,category:"Baking"},
  {id:5,emoji:"🌿",image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format",title:"Aromatics & Flavor Layering",chef:"Chef Priya Menon",duration:"30 min",level:1,locked:false,category:"Technique"},
  {id:6,emoji:"🍝",image:"https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&auto=format",title:"Hand-Rolled Fresh Pasta",chef:"Chef Elena Bianchi",duration:"48 min",level:2,locked:true,category:"Italian"},
  {id:7,emoji:"🍱",image:"https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop&auto=format",title:"Bento Box Mastery",chef:"Chef Hiroshi Kato",duration:"44 min",level:1,locked:false,category:"Asian"},
  {id:8,emoji:"🫕",image:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&auto=format",title:"One-Pot Filipino Stews",chef:"Chef Ana Santos",duration:"36 min",level:1,locked:false,category:"Filipino"},
  {id:9,emoji:"🍰",image:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop&auto=format",title:"Japanese Cheesecake Science",chef:"Chef Yumi Saito",duration:"52 min",level:3,locked:true,category:"Baking"},
  {id:10,emoji:"🥘",image:"https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=400&h=300&fit=crop&auto=format",title:"Authentic Paella Valencia",chef:"Chef Carlos Ruiz",duration:"60 min",level:2,locked:true,category:"Spanish"},
  {id:11,emoji:"🌮",image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&auto=format",title:"Street Tacos: The Real Way",chef:"Chef Diego Fuentes",duration:"28 min",level:1,locked:false,category:"Mexican"},
  {id:12,emoji:"🫙",image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format",title:"Fermentation Fundamentals",chef:"Chef Lars Hansen",duration:"45 min",level:2,locked:true,category:"Preservation"},
];

// ─── STATE ───
let currentRecipe = null;
let servings = 4;
let baseServings = 4;
let cookStep = 0;
let billingAnnual = false;

// ─── NAV ───
function navigate(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(a=>{
    a.classList.toggle('active', a.dataset.page===page);
  });
  const target = document.getElementById('page-'+page);
  if(target) target.classList.add('active');
  document.getElementById('mobileMenu').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}

document.querySelectorAll('.nav-link').forEach(el=>{
  el.addEventListener('click',e=>{
    e.preventDefault();
    const page = el.dataset.page;
    if(page) navigate(page);
  });
});

document.getElementById('hamburger').addEventListener('click',()=>{
  document.getElementById('mobileMenu').classList.toggle('open');
});

// ─── BUNDLE TABS ───
document.querySelectorAll('.bundle-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.bundle-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.testimonial-card').forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    const idx = tab.dataset.bundle;
    document.querySelector(`[data-bundle-card="${idx}"]`).classList.add('active');
  });
});

// ─── RECIPES ───
function renderRecipes(filter='all', search='') {
  const container = document.getElementById('recipesContainer');
  const filtered = RECIPES.filter(r=>{
    const matchFilter = filter==='all' || r.filter.includes(filter);
    const matchSearch = !search || r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some(t=>t.toLowerCase().includes(search.toLowerCase())) ||
      r.origin.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });
  container.innerHTML = `<div class="grid-4">${filtered.map(r=>`
    <div class="recipe-card" onclick="openRecipe(${r.id})">
      <div class="recipe-thumb">
        <img src="${r.image}" alt="${r.name}" class="recipe-thumb-img" loading="lazy">
        <div class="recipe-thumb-gradient"></div>
      </div>
      <div class="recipe-meta">
        <div class="recipe-name">${r.name}</div>
        <div class="recipe-tags">${r.tags.map(t=>`<span class="tag ${t==='Vegan'||t==='Low-Carb'||t==='Healthy'?'tag-green':'tag-gray'}">${t}</span>`).join('')}</div>
        <div class="recipe-info">
          <span class="recipe-time">⏱ ${r.time}</span>
          <span>🌍 ${r.origin}</span>
        </div>
      </div>
    </div>
  `).join('')}</div>`;
  if(!filtered.length) container.innerHTML = '<div style="text-align:center;padding:4rem;color:var(--text3)">No recipes found. Try a different search.</div>';
}
renderRecipes();

let activeFilter='all';
document.querySelectorAll('.filter-chip').forEach(chip=>{
  chip.addEventListener('click',()=>{
    document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter=chip.dataset.filter;
    renderRecipes(activeFilter, document.getElementById('recipeSearch').value);
  });
});
document.getElementById('recipeSearch').addEventListener('input',e=>{
  renderRecipes(activeFilter, e.target.value);
});

// ─── RECIPE MODAL ───
function openRecipe(id) {
  currentRecipe = RECIPES.find(r=>r.id===id);
  servings = 4; baseServings = 4;
  document.getElementById('modalEmoji').textContent = currentRecipe.emoji;
  document.getElementById('modalName').textContent = currentRecipe.name;
  document.getElementById('modalTime').textContent = currentRecipe.time;
  document.getElementById('modalDiff').textContent = currentRecipe.difficulty;
  document.getElementById('modalOrigin').textContent = currentRecipe.origin;
  document.getElementById('modalTags').innerHTML = currentRecipe.tags.map(t=>`<span class="tag ${t==='Vegan'||t==='Low-Carb'||t==='Healthy'?'tag-green':'tag-orange'}">${t}</span>`).join('');
  document.getElementById('servingCount').textContent = servings;
  renderIngredients();
  document.getElementById('modalSteps').innerHTML = currentRecipe.steps.map((s,i)=>`
    <div class="step-row">
      <div class="step-num">${i+1}</div>
      <div class="step-text">${s}</div>
    </div>`).join('');
  document.getElementById('recipeModal').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeRecipeModal() {
  document.getElementById('recipeModal').classList.remove('active');
  document.body.style.overflow='';
}
function renderIngredients() {
  const ratio = servings/baseServings;
  document.getElementById('modalIngredients').innerHTML = currentRecipe.ingredients.map(ing=>`
    <div class="ingredient-row">
      <span class="ingredient-name">${ing.name}</span>
      <span class="ingredient-qty">${formatQty(ing.base*ratio)} ${ing.unit}</span>
    </div>`).join('');
}
function formatQty(n) {
  return n%1===0 ? n : Math.round(n*10)/10;
}
document.getElementById('servingMinus').onclick=()=>{if(servings>1){servings--;document.getElementById('servingCount').textContent=servings;renderIngredients();}};
document.getElementById('servingPlus').onclick=()=>{servings++;document.getElementById('servingCount').textContent=servings;renderIngredients();};
document.getElementById('recipeModal').addEventListener('click',e=>{if(e.target===document.getElementById('recipeModal'))closeRecipeModal();});

// ─── COOK MODE ───
function openCookMode() {
  closeRecipeModal();
  cookStep=0;
  document.getElementById('cookModeTitle').textContent = currentRecipe.name.toUpperCase();
  updateCookMode();
  document.getElementById('cookModeOverlay').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeCookMode() {
  document.getElementById('cookModeOverlay').classList.remove('active');
  document.body.style.overflow='';
}
function updateCookMode() {
  const steps = currentRecipe.steps;
  const total = steps.length;
  document.getElementById('cookStepNum').textContent = `STEP ${cookStep+1} OF ${total}`;
  const highlighted = steps[cookStep].replace(/(\d+[\s]*(tbsp|tsp|cup|cups|ml|g|kg|min|minutes|°C|°F|hours|hour)[\w]*)/gi,'<em>$1</em>');
  document.getElementById('cookInstruction').innerHTML = highlighted;
  document.getElementById('cookProgressFill').style.width = ((cookStep+1)/total*100)+'%';
  document.getElementById('cookPrev').disabled = cookStep===0;
  document.getElementById('cookPrev').style.opacity = cookStep===0?'0.4':'1';
  document.getElementById('cookNext').textContent = cookStep===total-1 ? '🎉 Done!' : 'Next →';
}
function cookNav(dir) {
  const steps = currentRecipe.steps;
  if(dir===1 && cookStep===steps.length-1){closeCookMode();return;}
  cookStep = Math.max(0, Math.min(steps.length-1, cookStep+dir));
  updateCookMode();
}

// ─── MASTERCLASSES ───
function renderClasses() {
  document.getElementById('classesGrid').innerHTML = CLASSES.map(c=>`
    <div class="class-card">
      <div class="class-thumb">
        <img src="${c.image}" alt="${c.title}" class="class-thumb-img" loading="lazy">
        ${c.locked ? `
        <div class="class-lock">
          <div class="lock-icon">🔒</div>
          <div class="lock-text">PREMIUM</div>
        </div>` : `<div class="class-thumb-play">▶</div>`}
      </div>
      <div class="class-body">
        <div class="class-chef">with ${c.chef}</div>
        <div class="class-name">${c.title}</div>
        <div class="class-meta">
          <span>⏱ ${c.duration}</span>
          <div class="class-level">
            ${[1,2,3].map(l=>`<div class="level-dot${l<=c.level?' fill':''}"></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}
renderClasses();

// ─── PANTRY ───
function addIngredient() {
  const input = document.getElementById('pantryInput');
  const val = input.value.trim();
  if(!val) return;
  const chip = document.createElement('div');
  chip.className = 'ingredient-chip';
  chip.innerHTML = `🥬 ${val} <button onclick="removeChip(this)">✕</button>`;
  document.getElementById('pantryChips').appendChild(chip);
  input.value='';
  updateIngredientCount();
}
function removeChip(btn) {
  btn.closest('.ingredient-chip').remove();
  updateIngredientCount();
}
function updateIngredientCount() {
  const count = document.querySelectorAll('#pantryChips .ingredient-chip').length;
  const el = document.getElementById('ingredientCount');
  if(el) el.textContent = count;
}

// ─── PRICING ───
function toggleBilling() {
  billingAnnual = !billingAnnual;
  document.getElementById('billingToggle').classList.toggle('active',billingAnnual);
  document.getElementById('premiumPrice').textContent = billingAnnual ? '4' : '7';
  document.getElementById('premiumPeriod').textContent = billingAnnual ? '/month (billed annually)' : '/month';
}

// ─── FOOTER LINKS ───
function handleFooterLink(action) {
  switch(action) {
    case 'about':
      alert('About Cookaroo: We\'re building the world\'s most intelligent cookbook with AI-powered meal planning, voice-command cooking, and authentic global recipes from local chefs.');
      break;
    case 'blog':
      alert('Blog coming soon! Follow us on social media for cooking tips and behind-the-scenes content.');
      break;
    case 'pricing':
      navigate('pricing');
      break;
    case 'privacy':
      alert('Privacy Policy: We collect minimal data to provide our services. Your recipes and preferences are kept private and secure.');
      break;
    case 'terms':
      alert('Terms of Service: By using Cookaroo, you agree to cook with passion and share your culinary creations with the world!');
      break;
    case 'contact':
      alert('Contact Us: support@cookaroo.com - We love hearing from home cooks! Send us your favorite recipes.');
      break;
  }
}

// ─── SOCIAL MEDIA LINKS ───
function openSocial(platform) {
  const urls = {
    'twitter': 'https://twitter.com/cookaroo',
    'linkedin': 'https://linkedin.com/company/cookaroo',
    'instagram': 'https://instagram.com/cookaroo',
    'youtube': 'https://youtube.com/cookaroo'
  };
  window.open(urls[platform], '_blank');
}

// ─── APP DOWNLOAD LINKS ───
function downloadApp(store) {
  const urls = {
    'ios': 'https://apps.apple.com/app/cookaroo-intelligent-cookbook/id1234567890',
    'android': 'https://play.google.com/store/apps/details?id=com.cookaroo.app'
  };
  window.open(urls[store], '_blank');
}

// ─── GROCERY INTEGRATION ───
function orderFromGrocery(store, itemName) {
  const encodedItem = encodeURIComponent(itemName);
  const urls = {
    'grab': `https://grab.onelink.me/2695619868?pid=cookaroo&c=${encodedItem}`,
    'metro': `https://metromart.onelink.me/1234?pid=cookaroo&c=${encodedItem}`
  };
  window.open(urls[store], '_blank');
}

// ─── GROCERY LIST EXPORT ───
function exportGroceryList() {
  const items = Array.from(document.querySelectorAll('.grocery-item .grocery-item-name'))
    .map(item => item.textContent.trim());
  
  if (items.length === 0) {
    alert('Your grocery list is empty! Add some ingredients to your pantry first.');
    return;
  }

  const listText = items.join('\n');
  navigator.clipboard.writeText(listText).then(() => {
    alert('Grocery list copied to clipboard! You can now paste it into your favorite notes app or share it.');
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = listText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Grocery list copied to clipboard!');
  });
}

// ─── EVENT LISTENERS FOR NEW FUNCTIONALITY ───
document.addEventListener('DOMContentLoaded', function() {
  // Footer links
  document.querySelectorAll('.footer-col a:not(.nav-link)').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const action = this.textContent.toLowerCase().replace(/\s+/g, '');
      if (action.includes('about')) handleFooterLink('about');
      else if (action.includes('blog')) handleFooterLink('blog');
      else if (action.includes('privacy')) handleFooterLink('privacy');
      else if (action.includes('terms')) handleFooterLink('terms');
      else if (action.includes('contact')) handleFooterLink('contact');
    });
  });

  // Social media links
  document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const platform = this.textContent;
      if (platform === '𝕏') openSocial('twitter');
      else if (platform === 'in') openSocial('linkedin');
      else if (platform === '📷') openSocial('instagram');
      else if (platform === '▶') openSocial('youtube');
    });
  });

  // App download buttons
  document.querySelectorAll('.app-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const isIOS = this.querySelector('.app-btn-icon').textContent === '🍎';
      downloadApp(isIOS ? 'ios' : 'android');
    });
  });

  // Grocery list export
  const exportBtn = document.querySelector('button[style*="📋 Export Full List"]');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportGroceryList);
  }

  // Grocery item buttons
  document.querySelectorAll('.grocery-api-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const itemName = this.closest('.grocery-item').querySelector('.grocery-item-name').textContent;
      const isGrab = this.classList.contains('grab-btn');
      orderFromGrocery(isGrab ? 'grab' : 'metro', itemName);
    });
  });
});