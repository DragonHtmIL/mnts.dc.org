function getActiveContainer() {
  const tabs = [
    { tab: "imagesCategore", container: "imgpagination", label: "Img" },
    { tab: "videosCategore", container: "vidpagination", label: "Vid" },
    { tab: "aiCategore", container: "aipagination", label: "AI" }
  ];
  const activeTab = tabs.find(t =>
    document.getElementById(t.tab)?.classList.contains("active")
  );
  if (!activeTab) return null;
  return {
    element: document.getElementById(activeTab.container),
    label: activeTab.label
  };
};
function nextPagination() {
  const data = getActiveContainer();
  if (!data || !data.element) return;
  const items = data.element.querySelectorAll('.pagination');
  const active = data.element.querySelector('.pagination.active');
  if (!active) return;
  const index = Array.from(items).indexOf(active);
  if (index < items.length - 1) {
    items[index + 1].click();
  }
  updateUI();
};
function prevPagination() {
  const data = getActiveContainer();
  if (!data || !data.element) return;
  const items = data.element.querySelectorAll('.pagination');
  const active = data.element.querySelector('.pagination.active');
  if (!active) return;
  const index = Array.from(items).indexOf(active);
  if (index > 0) {
    items[index - 1].click();
  }
  updateUI();
};
function updateButtons() {
  const data = getActiveContainer();
  if (!data || !data.element) return;
  const items = data.element.querySelectorAll('.pagination');
  const active = data.element.querySelector('.pagination.active');
  if (!active) return;
  const index = Array.from(items).indexOf(active);
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  if (nextBtn) nextBtn.disabled = (index === items.length - 1);
  if (prevBtn) prevBtn.disabled = (index === 0);
};
function updatePaginationLabel() {
  const data = getActiveContainer();
  if (!data || !data.element) return;
  const items = data.element.querySelectorAll('.pagination');
  const active = data.element.querySelector('.pagination.active');
  if (!active) return;
  const index = Array.from(items).indexOf(active);
  const labelElement = document.getElementById("paginationNumber");
  if (!labelElement) return;
  const current = index + 1;
  const total = items.length;
  labelElement.textContent = `${data.label} ${current} / ${total}`;
};
function updateUI() {
  updateButtons();
  updatePaginationLabel();
};
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  document.querySelectorAll('.pagination').forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      parent.querySelectorAll('.pagination').forEach(el =>
        el.classList.remove("active")
      );
      btn.classList.add("active");
      updateUI();
    });
  });
});