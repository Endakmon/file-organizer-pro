// ========== Internationalization ==========
const LANGS = {
  en: {
    appTitle: "Easy File Organizer Pro",
    appDesc: "Drag and drop your files below and organize them instantly.",
    selectFiles: "Select files",
    organizeBy: "Organize by:",
    sortBy: "Sort by:",
    language: "Language:",
    darkMode: "Dark Mode",
    organizeZip: "Organize & Zip",
    clearList: "Clear List",
    saveSession: "💾 Save Session",
    loadSession: "📂 Load Session",
    preparingZip: "Preparing ZIP...",
    download: "Download Organized Files",
    sponsorMe: "❤️ Sponsor Me on GitHub",
    buyCoffee: "☕ Buy Me a Coffee",
    createdBy: "Created by",
    noFiles: "No files selected.",
    fileCount: "{count} files, {size} total",
    duplicate: "Duplicate file: {name} already added!",
    remove: "Remove this file",
    customFolder: "Folder:",
    enterFolder: "Enter folder name",
    warnDuplicates: "Some files were already added and skipped.",
    saveSuccess: "Session saved! Use Load Session to restore.",
    loadSuccess: "Session loaded!",
    loadError: "Could not load session data.",
    alertNoFiles: "Please select files first!",
    alertOnlySession: "No saved session found.",
    dragToReorder: "Drag to reorder files",
    group: {
      type: "File Type",
      extension: "Extension",
      date: "Upload Date",
      custom: "Custom"
    }
  },
  am: {
    appTitle: "የፋይል አደራ ማድሪያ ፕሮ",
    appDesc: "ፋይሎችዎን በታቀዱ ያስገቡ፣ በአንድ ጊዜ ያደራድሩ።",
    selectFiles: "ፋይሎች ይምረጡ",
    organizeBy: "ደራሽ በ፡",
    sortBy: "መደረግ በ፡",
    language: "ቋንቋ፡",
    darkMode: "ጨለማ ሁኔታ",
    organizeZip: "ደራሽ & ጠቅላላ ያድርጉ",
    clearList: "ዝርዝሩን ማጽዳት",
    saveSession: "💾 እሴዎን ያስቀምጡ",
    loadSession: "📂 እሴዎን ይመልሱ",
    preparingZip: "ዚፕ በመዘጋጀት ላይ...",
    download: "ደራሽ የተደረጉ ፋይሎችን ይውሰዱ",
    sponsorMe: "❤️ በGitHub ደግፉኝ",
    buyCoffee: "☕ ቡና ይግዙልኝ",
    createdBy: "የተፈጠረው በ",
    noFiles: "ፋይሎች አልተመረጡም።",
    fileCount: "{count} ፋይሎች፣ {size} ጠቅላላ",
    duplicate: "ድጋሚ ፋይል: {name} አስቀድሞ ታክሏል!",
    remove: "ይህን ፋይል ያስወግዱ",
    customFolder: "ፎልደር፦",
    enterFolder: "ፎልደር ስም ያስገቡ",
    warnDuplicates: "አንዳንድ ፋይሎች አስቀድሞ ታክለዋል እና ተወውተዋል።",
    saveSuccess: "እሴው ተቀምጧል! በ እሴዎን ይመልሱ ይመለሳሉ።",
    loadSuccess: "እሴው ተመልሷል!",
    loadError: "እሴውን ማግኘት አልቻልኩም።",
    alertNoFiles: "አንደገና ፋይሎች ይምረጡ!",
    alertOnlySession: "የተቀመጠ እሴ አልተገኘም።",
    dragToReorder: "ፋይሎችን ለመስተካከል ይጎትቱ",
    group: {
      type: "የፋይል አይነት",
      extension: "ቅጥያ",
      date: "የመጫኛ ቀን",
      custom: "በብፅዕት"
    }
  },
  fr: {
    appTitle: "Organiseur de Fichiers Pro",
    appDesc: "Glissez-déposez vos fichiers ci-dessous pour les organiser instantanément.",
    selectFiles: "Sélectionner des fichiers",
    organizeBy: "Organiser par :",
    sortBy: "Trier par :",
    language: "Langue :",
    darkMode: "Mode Sombre",
    organizeZip: "Organiser & Zipper",
    clearList: "Vider la liste",
    saveSession: "💾 Sauvegarder la session",
    loadSession: "📂 Charger la session",
    preparingZip: "Préparation du ZIP...",
    download: "Télécharger les fichiers organisés",
    sponsorMe: "❤️ Sponsorisez-moi sur GitHub",
    buyCoffee: "☕ Offrez-moi un café",
    createdBy: "Créé par",
    noFiles: "Aucun fichier sélectionné.",
    fileCount: "{count} fichiers, {size} au total",
    duplicate: "Fichier en double : {name} déjà ajouté !",
    remove: "Retirer ce fichier",
    customFolder: "Dossier :",
    enterFolder: "Entrer le nom du dossier",
    warnDuplicates: "Certains fichiers étaient déjà ajoutés et ont été ignorés.",
    saveSuccess: "Session sauvegardée ! Utilisez Charger la session pour restaurer.",
    loadSuccess: "Session chargée !",
    loadError: "Impossible de charger la session.",
    alertNoFiles: "Veuillez d'abord sélectionner des fichiers !",
    alertOnlySession: "Aucune session sauvegardée trouvée.",
    dragToReorder: "Glisser pour réorganiser les fichiers",
    group: {
      type: "Type de fichier",
      extension: "Extension",
      date: "Date de dépôt",
      custom: "Personnalisé"
    }
  }
};
let lang = 'en';
function t(k, vars={}) {
  let str = LANGS[lang][k] ?? k;
  Object.entries(vars).forEach(([v,val]) => str = str.replace(`{${v}}`, val));
  return str;
}
function updateLang() {
  document.getElementById('app-title').textContent = t('appTitle');
  document.getElementById('app-desc').textContent = t('appDesc');
  document.getElementById('select-files-btn').textContent = t('selectFiles');
  document.getElementById('organize-by-label').childNodes[0].textContent = t('organizeBy') + ' ';
  document.getElementById('sort-by-label').childNodes[0].textContent = t('sortBy') + ' ';
  document.getElementById('lang-label').childNodes[0].textContent = t('language') + ' ';
  document.getElementById('darkmode-toggle').childNodes[1].textContent = ' ' + t('darkMode');
  document.getElementById('organize-btn').textContent = t('organizeZip');
  document.getElementById('clear-btn').textContent = t('clearList');
  document.getElementById('save-session-btn').textContent = t('saveSession');
  document.getElementById('load-session-btn').textContent = t('loadSession');
  document.querySelector('.sponsor-button').textContent = t('sponsorMe');
  document.querySelector('.donate-button').textContent = t('buyCoffee');
  document.querySelector('footer p').innerHTML = `${t('createdBy')} <a href="https://github.com/Endakmew" target="_blank">Endakmew</a>`;
  displayFiles();
  displaySummary();
}

// ========== File State Management ==========
let files = [];
let customFolders = {}; // {filename: folderName}

const fileElem = document.getElementById('fileElem');
const fileList = document.getElementById('file-list');
const organizeBtn = document.getElementById('organize-btn');
const clearBtn = document.getElementById('clear-btn');
const downloadLink = document.getElementById('download-link');
const organizeMode = document.getElementById('organize-mode');
const sortMode = document.getElementById('sort-mode');
const langSelect = document.getElementById('lang-select');
const darkmodeCheckbox = document.getElementById('darkmode-checkbox');
const dropArea = document.getElementById('drop-area');
const progressContainer = document.getElementById('progress-container');
const zipProgress = document.getElementById('zip-progress');
const progressText = document.getElementById('progress-text');
const saveSessionBtn = document.getElementById('save-session-btn');
const loadSessionBtn = document.getElementById('load-session-btn');
const fileSummary = document.getElementById('file-summary');

langSelect.value = lang;
langSelect.onchange = () => { lang = langSelect.value; updateLang(); };

// ========== Dark Mode ==========
darkmodeCheckbox.onchange = () => {
  document.body.classList.toggle('dark', darkmodeCheckbox.checked);
  // Save dark mode preference
  localStorage.setItem('darkmode', darkmodeCheckbox.checked ? '1' : '0');
};
if (localStorage.getItem('darkmode') === '1') {
  darkmodeCheckbox.checked = true;
  document.body.classList.add('dark');
}

// ========== File Input & Drag/Drop ==========
fileElem.addEventListener('change', (e) => {
  addFiles([...e.target.files]);
  fileElem.value = '';
});
dropArea.addEventListener('drop', (e) => {
  e.preventDefault(); e.stopPropagation();
  addFiles([...e.dataTransfer.files]);
  dropArea.classList.remove('dragover');
});
['dragenter', 'dragover'].forEach(ev =>
  dropArea.addEventListener(ev, e => { e.preventDefault(); dropArea.classList.add('dragover'); }, false)
);
['dragleave', 'drop'].forEach(ev =>
  dropArea.addEventListener(ev, e => { dropArea.classList.remove('dragover'); }, false)
);

// ========== Duplicate Detection ==========
function addFiles(newFiles) {
  let duplicate = false;
  newFiles.forEach(f => {
    if (!files.find(x => x.name === f.name && x.size === f.size && x.lastModified === f.lastModified)) {
      files.push(f);
    } else {
      duplicate = true;
    }
  });
  if (duplicate) alert(t('warnDuplicates'));
  displayFiles();
  displaySummary();
}

// ========== File Summary ==========
function displaySummary() {
  if (files.length === 0) {
    fileSummary.textContent = '';
    return;
  }
  let totalSize = files.reduce((a, b) => a + b.size, 0);
  function formatSize(sz) {
    if (sz < 1024) return sz + " B";
    if (sz < 1024*1024) return (sz/1024).toFixed(1) + " KB";
    if (sz < 1024*1024*1024) return (sz/1024/1024).toFixed(2) + " MB";
    return (sz/1024/1024/1024).toFixed(2) + " GB";
  }
  fileSummary.textContent = t('fileCount', {count: files.length, size: formatSize(totalSize)});
}

// ========== Sort File List ==========
sortMode.onchange = displayFiles;
organizeMode.onchange = displayFiles;

// ========== File List Rendering ==========
function getIconForFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (file.type.startsWith('image/')) {
    // Show image thumbnail
    const img = document.createElement('img');
    img.className = 'file-preview';
    img.src = URL.createObjectURL(file);
    img.title = file.name;
    img.onload = () => URL.revokeObjectURL(img.src);
    return img;
  }
  if (file.type.startsWith('audio/')) return makeIcon('🎵');
  if (file.type.startsWith('video/')) return makeIcon('🎬');
  if (['pdf'].includes(ext)) return makeIcon('📄');
  if (['doc','docx','odt','rtf'].includes(ext)) return makeIcon('📝');
  if (['xls','xlsx','ods','csv'].includes(ext)) return makeIcon('📊');
  if (['ppt','pptx','odp'].includes(ext)) return makeIcon('📈');
  if (['zip','rar','7z','tar','gz'].includes(ext)) return makeIcon('🗜️');
  if (['js','ts','py','java','cpp','c','cs','html','css','json','xml','yml','sh','bat','php'].includes(ext))
    return makeIcon('💻');
  return makeIcon('📁');
}
function makeIcon(emoji) {
  const span = document.createElement('span');
  span.className = 'file-icon';
  span.textContent = emoji;
  return span;
}

function displayFiles() {
  fileList.innerHTML = '';
  let sorted = [...files];
  if (sortMode.value === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (sortMode.value === 'size') sorted.sort((a, b) => a.size - b.size);
  if (sortMode.value === 'date') sorted.sort((a, b) => a.lastModified - b.lastModified);

  if (sorted.length === 0) {
    fileList.textContent = t('noFiles');
    return;
  }
  const ul = document.createElement('ul');
  ul.id = 'sortable-list';
  sorted.forEach((file, i) => {
    const li = document.createElement('li');
    li.setAttribute('data-index', i);
    const handle = document.createElement('span');
    handle.className = 'reorder-handle';
    handle.title = t('dragToReorder');
    handle.textContent = '☰';
    li.appendChild(handle);
    li.appendChild(getIconForFile(file));
    li.appendChild(document.createTextNode(
      ` ${file.name} (${file.type || 'Unknown type'}, ${file.size} bytes)`
    ));
    // Show preview for audio
    if (file.type.startsWith('audio/')) {
      const audio = document.createElement('audio');
      audio.src = URL.createObjectURL(file);
      audio.controls = true;
      audio.style.maxWidth = '80px';
      audio.onplay = () => URL.revokeObjectURL(audio.src);
      li.appendChild(audio);
    }
    // Show preview for PDF
    if (file.type === 'application/pdf') {
      const pdfLink = document.createElement('a');
      pdfLink.href = URL.createObjectURL(file);
      pdfLink.target = '_blank';
      pdfLink.textContent = '📄';
      pdfLink.title = 'Preview PDF';
      li.appendChild(pdfLink);
    }
    // Custom folder for "custom" organize mode
    if (organizeMode.value === 'custom') {
      const lbl = document.createElement('label');
      lbl.textContent = t('customFolder');
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'custom-folder-input';
      inp.value = customFolders[file.name] || '';
      inp.placeholder = t('enterFolder');
      inp.oninput = () => { customFolders[file.name] = inp.value; };
      lbl.appendChild(inp);
      li.appendChild(lbl);
    }
    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '✖';
    removeBtn.title = t('remove');
    removeBtn.onclick = () => {
      files = files.filter(f => f !== file);
      displayFiles();
      displaySummary();
    };
    li.appendChild(removeBtn);

    ul.appendChild(li);
  });
  fileList.appendChild(ul);

  // Drag to reorder (SortableJS)
  if (window.Sortable) {
    Sortable.create(ul, {
      handle: '.reorder-handle',
      animation: 150,
      onEnd: function (evt) {
        // Reorder files array
        const oldIndex = evt.oldIndex, newIndex = evt.newIndex;
        if (oldIndex === newIndex) return;
        const f = files.splice(oldIndex, 1)[0];
        files.splice(newIndex, 0, f);
        displayFiles();
        displaySummary();
      }
    });
  }
  displaySummary();
}

// ========== Organize & Zip ==========
organizeBtn.addEventListener('click', async () => {
  if (files.length === 0) {
    alert(t('alertNoFiles'));
    return;
  }
  let groupFunc;
  switch (organizeMode.value) {
    case 'type':
      groupFunc = file => file.type ? file.type.split('/')[0] : 'other';
      break;
    case 'extension':
      groupFunc = file => {
        const ext = file.name.includes('.') ? file.name.split('.').pop().toLowerCase() : 'other';
        return ext || 'other';
      };
      break;
    case 'date':
      groupFunc = file => {
        const d = file.lastModified ? new Date(file.lastModified) : new Date();
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      };
      break;
    case 'custom':
      groupFunc = file => customFolders[file.name]?.trim() || 'Custom';
      break;
    default:
      groupFunc = file => 'other';
  }
  // Group files by selected rule
  const folders = {};
  files.forEach(file => {
    const key = groupFunc(file);
    if (!folders[key]) folders[key] = [];
    folders[key].push(file);
  });

  // Create zip and add files into folders
  const zip = new JSZip();
  Object.entries(folders).forEach(([folder, filesInFolder]) => {
    filesInFolder.forEach(file => {
      zip.folder(folder).file(file.name, file);
    });
  });

  downloadLink.style.display = 'none';
  downloadLink.textContent = t('preparingZip');
  progressContainer.style.display = 'block';
  zipProgress.value = 0;
  progressText.textContent = t('preparingZip');

  try {
    const blob = await zip.generateAsync(
      {type:"blob"},
      (meta) => {
        zipProgress.value = Math.round(meta.percent);
        progressText.textContent = `${t('preparingZip')} (${Math.round(meta.percent)}%)`;
      }
    );
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.style.display = 'inline-block';
    downloadLink.textContent = t('download');
    progressContainer.style.display = 'none';
  } catch (error) {
    alert('Error creating ZIP file: ' + error);
    progressContainer.style.display = 'none';
  }
});

// ========== Clear List ==========
clearBtn.addEventListener('click', () => {
  files = [];
  customFolders = {};
  displayFiles();
  displaySummary();
  downloadLink.style.display = 'none';
});

// ========== Save / Load Session ==========
saveSessionBtn.addEventListener('click', () => {
  if (files.length === 0) return;
  // Save file metadata, not file contents (browser security)
  const meta = files.map(f => ({
    name: f.name,
    size: f.size,
    lastModified: f.lastModified,
    type: f.type
  }));
  const folders = {...customFolders};
  localStorage.setItem('efs_files', JSON.stringify(meta));
  localStorage.setItem('efs_folders', JSON.stringify(folders));
  alert(t('saveSuccess'));
});
loadSessionBtn.addEventListener('click', () => {
  const meta = JSON.parse(localStorage.getItem('efs_files') || '[]');
  const folders = JSON.parse(localStorage.getItem('efs_folders') || '{}');
  if (!meta.length) { alert(t('alertOnlySession')); return; }
  // Can't restore actual File objects, but can show info
  files = meta.map(m => ({
    name: m.name, size: m.size, lastModified: m.lastModified, type: m.type,
    // Dummy File for display
    get [Symbol.toStringTag]() {return 'File';}
  }));
  customFolders = folders;
  displayFiles();
  displaySummary();
  alert(t('loadSuccess'));
});

// ========== Keyboard shortcut: Ctrl+Z to clear ==========
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
    files = [];
    customFolders = {};
    displayFiles();
    displaySummary();
    downloadLink.style.display = 'none';
  }
});

// ========== Initial Render ==========
updateLang();
displayFiles();
displaySummary();