/* ==========================================================================
   Emerald Advisory — Vanilla JavaScript Interaction Layer
   Zero Dependencies · Pure ES6+ · Works Directly on GitHub Pages
   ========================================================================== */

(function () {
  'use strict';

  var TELEGRAM_USERNAME = 'EmeraldAdvisoryIR';

  /* ------------------------------------------------------------------------
     Catalog Data (Shared by Products Grid & Telegram Ordering Modal)
     ------------------------------------------------------------------------ */
  var PACKAGES = [
    {
      id: 'corp-accounting',
      category: 'accounting',
      categoryLabel: 'حسابداری شرکتی',
      title: 'بسته جامع حسابداری و تحریر دفاتر قانونی',
      subtitle: 'انضباط مالی ماهانه و انطباق کامل با استانداردهای حسابداری ایران',
      price: 18500000,
      priceDisplay: '۱۸,۵۰۰,۰۰۰',
      unit: 'تومان / ماهانه',
      featured: false,
      goldTier: false,
      sla: 'گزارش‌دهی منظم در پنجم هر ماه',
      deliverables: [
        'ثبت و طبقه‌بندی روزانه اسناد حسابداری و مغایرت‌گیری بانکی',
        'تهیه و ارسال لیست حقوق، بیمه تامین اجتماعی و مالیات تکلیفی',
        'تنظیم گزارش‌های فصلی معاملات (ماده ۱۶۹) و ارزش افزوده',
        'پلمپ، تحریر دفاتر قانونی و آماده‌سازی تراز آزمایشی ماهانه'
      ],
      scope: 'مناسب برای شرکت‌های بازرگانی، خدماتی و تولیدی با حجم اسناد متوسط تا بالا که به دنبال شفافیت کامل ترازنامه و پیشگیری از جرایم ماده ۱۶۹ و ارزش افزوده هستند.'
    },
    {
      id: 'tax-shield',
      category: 'tax',
      categoryLabel: 'هوشمندی مالیاتی',
      title: 'سپر دفاعیه و بهینه‌سازی مالیات شرکتی',
      subtitle: 'کاهش قانونی ریسک مالیاتی و دفاع مستند در هیئت‌های حل اختلاف',
      price: 24000000,
      priceDisplay: '۲۴,۰۰۰,۰۰۰',
      unit: 'تومان / هر پرونده',
      featured: true,
      goldTier: false,
      sla: 'تدوین لایحه تخصصی ظرف ۷۲ ساعت',
      deliverables: [
        'حسابرسی پیش‌دفاعی برگ تشخیص و شناسایی مغایرت‌های قانونی',
        'تنظیم لوایح مستند بر اساس بخشنامه‌های سازمان امور مالیاتی',
        'حضور کارشناس ارشد رسمی در جلسات ماده ۲۳۸ و هیئت حل اختلاف',
        'معماری معافیت‌ها و مشوق‌های قانونی برای سال مالی پیش‌رو'
      ],
      scope: 'طراحی‌شده برای شرکت‌هایی که با برگ تشخیص مالیاتی، جرایم ارزش افزوده یا چالش‌های ممیزی روبه‌رو هستند و نیازمند دفاع حقوقی و حسابداری هم‌زمان می‌باشند.'
    },
    {
      id: 'cfo-dashboard',
      category: 'cfo',
      categoryLabel: 'مشاوره مدیرعامل',
      title: 'داشبورد مالی مدیرعامل و مدیریت جریان نقد',
      subtitle: 'خدمات مدیر مالی برون‌سپاری‌شده (Fractional CFO) برای تصمیم‌سازی دقیق',
      price: 32000000,
      priceDisplay: '۳۲,۰۰۰,۰۰۰',
      unit: 'تومان / ماهانه',
      featured: true,
      goldTier: true,
      sla: 'جلسه بررسی هیئت‌مدیره هر دو هفته یک‌بار',
      deliverables: [
        'طراحی مدل پیش‌بینی جریان نقدینگی ۹۰ روزه و تحلیل نقطه سر به سر',
        'گزارش سودآوری تفکیکی به ازای هر محصول، شعبه یا پروژه',
        'بودجه‌بندی سالانه و پایش ماهانه انحرافات عملکردی',
        'مشاوره ساختار تأمین مالی، اعتبارسنجی بانکی و جذب سرمایه'
      ],
      scope: 'ویژه مدیران عامل و بنیان‌گذارانی که می‌خواهند پیش از هر تصمیم توسعه یا سرمایه‌گذاری، تصویر عددی شفاف از حاشیه سود و ریسک نقدینگی داشته باشند.'
    },
    {
      id: 'startup-launch',
      category: 'startup',
      categoryLabel: 'پکیج‌های استارتاپی',
      title: 'بسته استقرار مالی و مالیاتی استارتاپ‌ها',
      subtitle: 'راه‌اندازی ساختار شفاف حسابداری، قراردادها و پرونده مالیاتی از روز اول',
      price: 12800000,
      priceDisplay: '۱۲,۸۰۰,۰۰۰',
      unit: 'تومان / استقرار کامل',
      featured: false,
      goldTier: false,
      sla: 'تحویل و راه‌اندازی کامل در ۱۰ روز کاری',
      deliverables: [
        'تشکیل پرونده مالیاتی، دریافت کد اقتصادی و اتصال سامانه مودیان',
        'راه‌اندازی کدینگ استاندارد حسابداری متناسب با مدل درآمدی',
        'تدوین الگوی قراردادهای پرسنلی، پیمانکاری و سهام تشویقی',
        'آموزش عملی تیم داخلی برای ثبت صحیح تنخواه و هزینه‌های جاری'
      ],
      scope: 'سریع‌ترین مسیر برای شرکت‌های دانش‌بنیان و استارتاپ‌های در حال رشد جهت آماده‌سازی گزارش‌های شفاف برای سرمایه‌گذاران (Due Diligence).'
    },
    {
      id: 'internal-audit',
      category: 'accounting',
      categoryLabel: 'حسابداری شرکتی',
      title: 'حسابرسی داخلی و بازطراحی کنترل‌های مالی',
      subtitle: 'کشف گلوگاه‌های هزینه‌ای، پیشگیری از خطای سیستمی و استانداردسازی فرآیندها',
      price: 29500000,
      priceDisplay: '۲۹,۵۰۰,۰۰۰',
      unit: 'تومان / پروژه‌ای',
      featured: false,
      goldTier: false,
      sla: 'تحویل گزارش جامع یافته‌ها در ۲۱ روز کاری',
      deliverables: [
        'بررسی ریسک چرخه فروش، انبار، خزانه‌داری و تدارکات شرکت',
        'شناسایی هزینه‌های پنهان و تداخل دسترسی‌های مالی در نرم‌افزار',
        'تدوین آیین‌نامه جامع تنخواه‌گردانی، امضای مجاز و کنترل بودجه',
        'ارائه نقشه راه اصلاحی با اولویت‌بندی ریسک مالی'
      ],
      scope: 'پیشنهادی برای مجموعه‌های در حال مقیاس‌پذیری که با تعدد شعب یا تراکنش‌ها، نیازمند کنترل‌های داخلی مستحکم هستند.'
    },
    {
      id: 'holding-tax-arch',
      category: 'tax',
      categoryLabel: 'هوشمندی مالیاتی',
      title: 'ساختاردهی مالیاتی هلدینگ‌ها و قراردادهای کلان',
      subtitle: 'برنامه‌ریزی راهبردی مالیات برای گروه شرکت‌ها و تراکنش‌های میان‌گروهی',
      price: 45000000,
      priceDisplay: '۴۵,۰۰۰,۰۰۰',
      unit: 'تومان / فصلی',
      featured: true,
      goldTier: true,
      sla: 'تیم اختصاصی حسابدار رسمی و مشاور حقوقی',
      deliverables: [
        'بازنگری مالیاتی قراردادهای B2B، پیمانکاری و انتقال دارایی',
        'مدیریت بهینه مالیات معاملات بین شرکت‌های زیرمجموعه هلدینگ',
        'پایش مستمر انطباق سامانه مودیان و صورت‌حساب‌های الکترونیک',
        'همراهی مستقیم در مجامع عمومی و کمیته حسابرسی هیئت‌مدیره'
      ],
      scope: 'بالاترین سطح خدمات گروه مشاوره زمرد برای هلدینگ‌ها و بنگاه‌های بزرگ اقتصادی با تمرکز بر حفظ سرمایه و پایداری بلندمدت.'
    }
  ];

  function toPersianDigits(input) {
    var map = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(input).replace(/\d/g, function (d) {
      return map[Number(d)];
    });
  }

  function formatToman(amount) {
    var formatted = Number(amount).toLocaleString('en-US');
    return toPersianDigits(formatted);
  }

  function buildTelegramUrl(message) {
    return 'https://t.me/' + TELEGRAM_USERNAME + '?text=' + encodeURIComponent(message);
  }

  /* ------------------------------------------------------------------------
     1. Floating Header Scroll State & Mobile Drawer
     ------------------------------------------------------------------------ */
  function initHeaderAndDrawer() {
    var header = document.querySelector('.site-header');
    var menuBtn = document.getElementById('mobile-menu-toggle');
    var drawer = document.getElementById('mobile-drawer');

    if (header) {
      var onScroll = function () {
        if (window.scrollY > 12) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (menuBtn && drawer) {
      var toggleDrawer = function (forceState) {
        var isOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('is-open');
        drawer.classList.toggle('is-open', isOpen);
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      };

      menuBtn.addEventListener('click', function () {
        toggleDrawer();
      });

      drawer.querySelectorAll('a, button').forEach(function (el) {
        el.addEventListener('click', function () {
          toggleDrawer(false);
        });
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
          toggleDrawer(false);
          menuBtn.focus();
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     2. Scroll Reveal (Compositor-Only + Reduced Motion Safe)
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     3. Telegram Quick-Order Modal (Available on Every Page)
     ------------------------------------------------------------------------ */
  function initTelegramOrderModal() {
    var modal = document.getElementById('telegram-order-modal');
    if (!modal) return;

    var closeBtn = document.getElementById('tg-modal-close');
    var pkgSelect = document.getElementById('tg-package-select');
    var cycleSelect = document.getElementById('tg-cycle-select');
    var nameInput = document.getElementById('tg-client-name');
    var companyInput = document.getElementById('tg-company-name');
    var phoneInput = document.getElementById('tg-client-phone');
    var notesInput = document.getElementById('tg-client-notes');
    var previewBox = document.getElementById('tg-order-preview');
    var launchLink = document.getElementById('tg-launch-link');
    var copyBtn = document.getElementById('tg-copy-btn');
    var copyToast = document.getElementById('tg-copy-toast');

    if (pkgSelect && pkgSelect.options.length === 0) {
      PACKAGES.forEach(function (pkg) {
        var opt = document.createElement('option');
        opt.value = pkg.id;
        opt.textContent = pkg.title + ' (' + pkg.priceDisplay + ' ' + pkg.unit + ')';
        pkgSelect.appendChild(opt);
      });
    }

    function getSelectedPackage() {
      var id = pkgSelect ? pkgSelect.value : PACKAGES[0].id;
      return PACKAGES.find(function (p) { return p.id === id; }) || PACKAGES[0];
    }

    function buildOrderMessage() {
      var pkg = getSelectedPackage();
      var cycle = cycleSelect ? cycleSelect.value : 'ماهانه';
      var discountMultiplier = cycle === 'سالانه (۱۰٪ تخفیف)' ? 0.9 : 1;
      var effectivePrice = Math.round(pkg.price * discountMultiplier);

      var clientName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'مشخص نشده';
      var companyName = companyInput && companyInput.value.trim() ? companyInput.value.trim() : 'مشخص نشده';
      var phone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : 'مشخص نشده';
      var notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : 'ندارد';

      var lines = [
        'سلام وقت بخیر، درخواست ثبت سفارش مشاوره از وب‌سایت گروه زمرد:',
        '-------------------------',
        'بسته انتخابی: ' + pkg.title,
        'نوع قرارداد: ' + cycle,
        'تعرفه تخمینی: ' + formatToman(effectivePrice) + ' تومان',
        'نام و نام خانوادگی: ' + clientName,
        'نام شرکت / کسب‌وکار: ' + companyName,
        'شماره تماس: ' + phone,
        'توضیحات تکمیلی: ' + notes
      ];
      return lines.join('\n');
    }

    function refreshPreview() {
      var msg = buildOrderMessage();
      if (previewBox) previewBox.textContent = msg;
      if (launchLink) launchLink.href = buildTelegramUrl(msg);
      if (copyToast) copyToast.classList.remove('is-visible');
    }

    function openModal(packageId) {
      if (packageId && pkgSelect) {
        pkgSelect.value = packageId;
      }
      refreshPreview();
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (nameInput) {
        setTimeout(function () { nameInput.focus(); }, 120);
      }
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-telegram-order]');
      if (trigger) {
        e.preventDefault();
        var pkgId = trigger.getAttribute('data-package-id') || '';
        openModal(pkgId);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });

    [pkgSelect, cycleSelect, nameInput, companyInput, phoneInput, notesInput].forEach(function (field) {
      if (field) {
        field.addEventListener('input', refreshPreview);
        field.addEventListener('change', refreshPreview);
      }
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var text = buildOrderMessage();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            if (copyToast) copyToast.classList.add('is-visible');
          });
        } else {
          var ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand('copy');
            if (copyToast) copyToast.classList.add('is-visible');
          } catch (err) {}
          document.body.removeChild(ta);
        }
      });
    }

    refreshPreview();
  }

  /* ------------------------------------------------------------------------
     4. Products Catalog, Filtering, Details Modal & Tax/ROI Estimator
     ------------------------------------------------------------------------ */
  function initProductsPage() {
    var grid = document.getElementById('products-grid');
    if (!grid) return;

    var filterBtns = document.querySelectorAll('[data-filter-category]');
    var searchInput = document.getElementById('catalog-search');
    var sortSelect = document.getElementById('catalog-sort');
    var countLabel = document.getElementById('catalog-count');
    var emptyState = document.getElementById('catalog-empty');
    var resetBtn = document.getElementById('catalog-reset-btn');

    var detailModal = document.getElementById('package-detail-modal');
    var detailClose = document.getElementById('detail-modal-close');
    var detailTitle = document.getElementById('detail-modal-title');
    var detailCategory = document.getElementById('detail-modal-category');
    var detailScope = document.getElementById('detail-modal-scope');
    var detailList = document.getElementById('detail-modal-list');
    var detailSla = document.getElementById('detail-modal-sla');
    var detailPrice = document.getElementById('detail-modal-price');
    var detailOrderBtn = document.getElementById('detail-modal-order-btn');

    var activeCategory = 'all';
    var searchQuery = '';
    var sortMode = 'recommended';

    function renderCatalog() {
      var list = PACKAGES.filter(function (pkg) {
        var matchesCat = activeCategory === 'all' || pkg.category === activeCategory;
        var q = searchQuery.trim();
        var matchesSearch = !q ||
          pkg.title.indexOf(q) !== -1 ||
          pkg.subtitle.indexOf(q) !== -1 ||
          pkg.categoryLabel.indexOf(q) !== -1 ||
          pkg.deliverables.some(function (d) { return d.indexOf(q) !== -1; });
        return matchesCat && matchesSearch;
      });

      if (sortMode === 'price-asc') {
        list = list.slice().sort(function (a, b) { return a.price - b.price; });
      } else if (sortMode === 'price-desc') {
        list = list.slice().sort(function (a, b) { return b.price - a.price; });
      }

      if (countLabel) {
        countLabel.textContent = 'نمایش ' + toPersianDigits(list.length) + ' بسته تخصصی';
      }

      grid.innerHTML = '';

      if (list.length === 0) {
        if (emptyState) emptyState.style.display = 'flex';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      list.forEach(function (pkg) {
        var card = document.createElement('article');
        card.className = 'glass-l1 glass-l1--interactive service-card' + (pkg.goldTier ? ' card-gold-accent' : '');

        var itemsHtml = pkg.deliverables.slice(0, 3).map(function (item) {
          return '<li>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
            '<span>' + item + '</span>' +
            '</li>';
        }).join('');

        var tierLabel = pkg.goldTier
          ? '<span class="kicker-label kicker-label--gold">' + pkg.categoryLabel + ' · سطح ویژه هیئت‌مدیره</span>'
          : '<span class="kicker-label">' + pkg.categoryLabel + '</span>';

        card.innerHTML =
          '<div class="service-card__head">' +
            '<div class="meta-line">' + tierLabel + '</div>' +
            '<h3 class="headline-sm">' + pkg.title + '</h3>' +
            '<p class="body-md text-muted">' + pkg.subtitle + '</p>' +
            '<ul class="service-list">' + itemsHtml + '</ul>' +
          '</div>' +
          '<div class="service-card__footer">' +
            '<div class="price-row">' +
              '<span class="price-value">' + pkg.priceDisplay + '</span>' +
              '<span class="price-unit">' + pkg.unit + '</span>' +
            '</div>' +
            '<div class="card-actions">' +
              '<button type="button" class="btn btn-primary btn--sm" data-telegram-order data-package-id="' + pkg.id + '">' +
                'سفارش در تلگرام' +
              '</button>' +
              '<button type="button" class="btn btn-outline btn--sm" data-package-detail="' + pkg.id + '">' +
                'جزئیات کامل' +
              '</button>' +
            '</div>' +
          '</div>';

        grid.appendChild(card);
      });
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = btn.getAttribute('data-filter-category') || 'all';
        filterBtns.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        renderCatalog();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = searchInput.value;
        renderCatalog();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        sortMode = sortSelect.value;
        renderCatalog();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        activeCategory = 'all';
        searchQuery = '';
        sortMode = 'recommended';
        if (searchInput) searchInput.value = '';
        if (sortSelect) sortSelect.value = 'recommended';
        filterBtns.forEach(function (b) {
          var isAll = b.getAttribute('data-filter-category') === 'all';
          b.classList.toggle('is-active', isAll);
          b.setAttribute('aria-pressed', isAll ? 'true' : 'false');
        });
        renderCatalog();
      });
    }

    /* Package Detail Modal */
    function openDetailModal(pkgId) {
      if (!detailModal) return;
      var pkg = PACKAGES.find(function (p) { return p.id === pkgId; });
      if (!pkg) return;

      if (detailTitle) detailTitle.textContent = pkg.title;
      if (detailCategory) detailCategory.textContent = pkg.categoryLabel + ' · ' + pkg.sla;
      if (detailScope) detailScope.textContent = pkg.scope;
      if (detailSla) detailSla.textContent = pkg.sla;
      if (detailPrice) detailPrice.textContent = pkg.priceDisplay + ' ' + pkg.unit;
      if (detailOrderBtn) detailOrderBtn.setAttribute('data-package-id', pkg.id);
      if (detailList) {
        detailList.innerHTML = pkg.deliverables.map(function (item) {
          return '<li>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
            '<span>' + item + '</span>' +
            '</li>';
        }).join('');
      }

      detailModal.classList.add('is-open');
      detailModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeDetailModal() {
      if (!detailModal) return;
      detailModal.classList.remove('is-open');
      detailModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
      var detailTrigger = e.target.closest('[data-package-detail]');
      if (detailTrigger) {
        e.preventDefault();
        openDetailModal(detailTrigger.getAttribute('data-package-detail'));
      }
    });

    if (detailOrderBtn) {
      detailOrderBtn.addEventListener('click', function () {
        closeDetailModal();
      });
    }

    if (detailClose) detailClose.addEventListener('click', closeDetailModal);
    if (detailModal) {
      detailModal.addEventListener('click', function (e) {
        if (e.target === detailModal) closeDetailModal();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && detailModal && detailModal.classList.contains('is-open')) {
        closeDetailModal();
      }
    });

    /* Interactive Package & Savings Estimator */
    var estSize = document.getElementById('est-team-size');
    var estFocus = document.getElementById('est-primary-focus');
    var estPkgName = document.getElementById('est-pkg-name');
    var estSavings = document.getElementById('est-savings-val');
    var estHours = document.getElementById('est-hours-val');
    var estOrderBtn = document.getElementById('est-order-btn');

    function updateEstimator() {
      if (!estSize || !estFocus) return;
      var size = estSize.value;
      var focus = estFocus.value;
      var recommendedId = 'corp-accounting';
      var savingsText = '۱۸٪ تا ۲۴٪ کاهش ریسک جرایم';
      var hoursText = '۳۶ ساعت در ماه';

      if (focus === 'tax') {
        recommendedId = size === 'enterprise' ? 'holding-tax-arch' : 'tax-shield';
        savingsText = size === 'enterprise' ? '۲۸٪ بهینه‌سازی ساختار مالیاتی' : '۲۲٪ کاهش جرایم و برگ تشخیص';
        hoursText = size === 'enterprise' ? '۶۵ ساعت در فصل' : '۲۸ ساعت در پرونده';
      } else if (focus === 'cfo') {
        recommendedId = 'cfo-dashboard';
        savingsText = '۱۹٪ بهبود گردش نقدینگی';
        hoursText = '۴۲ ساعت در ماه';
      } else if (size === 'startup') {
        recommendedId = 'startup-launch';
        savingsText = '۱۰۰٪ آمادگی ممیزی و جذب سرمایه';
        hoursText = '۲۴ ساعت در استقرار';
      } else if (size === 'enterprise') {
        recommendedId = 'internal-audit';
        savingsText = '۲۶٪ کاهش نشت هزینه‌های عملیاتی';
        hoursText = '۵۰ ساعت در ماه';
      }

      var pkg = PACKAGES.find(function (p) { return p.id === recommendedId; }) || PACKAGES[0];
      if (estPkgName) estPkgName.textContent = pkg.title;
      if (estSavings) estSavings.textContent = savingsText;
      if (estHours) estHours.textContent = hoursText;
      if (estOrderBtn) estOrderBtn.setAttribute('data-package-id', pkg.id);
    }

    if (estSize && estFocus) {
      estSize.addEventListener('change', updateEstimator);
      estFocus.addEventListener('change', updateEstimator);
      updateEstimator();
    }

    renderCatalog();
  }

  /* ------------------------------------------------------------------------
     5. FAQ Accordion Panels (About Page)
     ------------------------------------------------------------------------ */
  function initFaqAccordion() {
    var faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq-trigger');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var wasOpen = item.classList.contains('is-open');
        faqItems.forEach(function (other) {
          other.classList.remove('is-open');
          var otherBtn = other.querySelector('.faq-trigger');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Contact Form Validation, Floating Labels & Direct Telegram Submit
     ------------------------------------------------------------------------ */
  function initContactForm() {
    var form = document.getElementById('consultation-form');
    if (!form) return;

    var nameField = document.getElementById('contact-name');
    var companyField = document.getElementById('contact-company');
    var phoneField = document.getElementById('contact-phone');
    var topicField = document.getElementById('contact-topic');
    var messageField = document.getElementById('contact-message');
    var feedbackBox = document.getElementById('contact-feedback');
    var trackingCodeEl = document.getElementById('contact-tracking-code');
    var feedbackTgLink = document.getElementById('contact-feedback-tg');
    var directTgBtn = document.getElementById('contact-direct-tg-btn');

    if (topicField) {
      var syncSelectLabel = function () {
        topicField.classList.toggle('has-value', topicField.value !== '');
      };
      topicField.addEventListener('change', syncSelectLabel);
      syncSelectLabel();
    }

    function setFieldError(inputEl, hasError) {
      if (!inputEl) return;
      var wrap = inputEl.closest('.floating-field');
      if (wrap) {
        wrap.classList.toggle('has-error', hasError);
      }
      inputEl.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    }

    function validateForm() {
      var valid = true;

      var nameVal = nameField ? nameField.value.trim() : '';
      if (nameVal.length < 2) {
        setFieldError(nameField, true);
        valid = false;
      } else {
        setFieldError(nameField, false);
      }

      var phoneVal = phoneField ? phoneField.value.trim() : '';
      var normalizedPhone = phoneVal.replace(/[۰-۹]/g, function (d) {
        return String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
      }).replace(/[\s-]/g, '');
      var isPhoneOk = /^(\+98|0)?9\d{9}$/.test(normalizedPhone);
      if (!isPhoneOk) {
        setFieldError(phoneField, true);
        valid = false;
      } else {
        setFieldError(phoneField, false);
      }

      var topicVal = topicField ? topicField.value : '';
      if (!topicVal) {
        setFieldError(topicField, true);
        valid = false;
      } else {
        setFieldError(topicField, false);
      }

      return valid;
    }

    function buildConsultationText() {
      var nameVal = nameField ? nameField.value.trim() : '';
      var companyVal = companyField && companyField.value.trim() ? companyField.value.trim() : 'ثبت نشده';
      var phoneVal = phoneField ? phoneField.value.trim() : '';
      var topicText = topicField && topicField.selectedIndex > 0
        ? topicField.options[topicField.selectedIndex].text
        : 'مشاوره عمومی';
      var msgVal = messageField && messageField.value.trim() ? messageField.value.trim() : 'ندارد';

      return [
        'سلام وقت بخیر، درخواست جلسه مشاوره اختصاصی:',
        '-------------------------',
        'نام و نام خانوادگی: ' + nameVal,
        'نام شرکت: ' + companyVal,
        'شماره تماس: ' + phoneVal,
        'موضوع مشاوره: ' + topicText,
        'شرح درخواست: ' + msgVal
      ].join('\n');
    }

    [nameField, phoneField, topicField].forEach(function (el) {
      if (el) {
        el.addEventListener('input', function () { setFieldError(el, false); });
        el.addEventListener('change', function () { setFieldError(el, false); });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;

      var randomNum = Math.floor(1000 + Math.random() * 9000);
      var code = 'EA-1405-' + toPersianDigits(randomNum);
      if (trackingCodeEl) trackingCodeEl.textContent = code;
      if (feedbackTgLink) feedbackTgLink.href = buildTelegramUrl(buildConsultationText());
      if (feedbackBox) feedbackBox.classList.add('is-visible');
    });

    if (directTgBtn) {
      directTgBtn.addEventListener('click', function (e) {
        if (!validateForm()) {
          e.preventDefault();
          return;
        }
        var url = buildTelegramUrl(buildConsultationText());
        directTgBtn.setAttribute('href', url);
      });
    }
  }

  /* ------------------------------------------------------------------------
     Initialize All Modules on DOM Ready
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initHeaderAndDrawer();
    initScrollReveal();
    initTelegramOrderModal();
    initProductsPage();
    initFaqAccordion();
    initContactForm();
  });
})();
