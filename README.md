# Tailwind Jekyll Theme

A modern Jekyll theme using Tailwind CSS for styling. This theme combines Jekyll's static site generation with Tailwind's utility-first CSS framework.

## Features

- Built with Tailwind CSS
- Responsive design
- Dark/light mode support
- Customizable color schemes
- Mobile-friendly navigation
- Hero sections
- Blog post layouts
- Customizable components

## Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make
- Node.js and npm

## Directory Structure

```
.
├── _includes/          # Reusable components
├── _layouts/           # Page templates
├── _sass/             # Theme styles (if needed)
├── assets/
│   └── css/
│       ├── tailwind.css    # Source Tailwind CSS
│       └── styles.css      # Compiled CSS (generated)
├── Makefile           # Build automation
├── _config.yml        # Jekyll configuration
├── package.json       # Node.js dependencies
├── postcss.config.js  # PostCSS configuration
└── tailwind.config.js # Tailwind configuration
```

## Quick Start

1. Install Jekyll and bundler gems:
```bash
gem install jekyll bundler
```

2. Install theme dependencies and build CSS:
```bash
make install
make build
```

3. Run Jekyll:
```bash
bundle exec jekyll serve
```

Your site should now be running at `http://localhost:4000`.

## Development

The theme includes a Makefile for common tasks:

### Available Make Commands

- `make install`: Install all Node.js dependencies
- `make build`: Build the Tailwind CSS
- `make watch`: Watch for CSS changes and rebuild
- `make clean`: Remove generated CSS files
- `make rebuild`: Full rebuild (clean and build)

### Development Workflow

1. Start the CSS watcher:
```bash
make watch
```

2. In a separate terminal, run Jekyll:
```bash
bundle exec jekyll serve --livereload
```

### Building for Production

```bash
make build
bundle exec jekyll build
```

## Configuration

### Tailwind CSS

The theme uses a custom Tailwind configuration in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#101827',
          // ... other color variants
        },
      },
    }
  }
}
```

### Jekyll Configuration

Update `_config.yml` with your site settings:

```yaml
title: Your Site Title
description: Your site description
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site
```

## Customization

### Adding Custom Styles

Add custom styles in `assets/css/tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* Your custom component styles */
}

@layer utilities {
  /* Your custom utility styles */
}
```

### Creating New Layouts

1. Add new layout files in `_layouts/`
2. Use Jekyll front matter to specify layouts
3. Use Tailwind classes for styling

Example:
```html
---
layout: base
---
<div class="container mx-auto px-4">
  {{ content }}
</div>
```

### Components

The theme includes several pre-built components:

- Navigation header
- Hero sections
- Cards
- Buttons
- Article layouts
- Footers

Use these components by including them in your layouts:

```liquid
{% include header.html %}
```

## Common Usage Patterns

### Adding a New Page

1. Create a new `.md` or `.html` file in the root directory
2. Add front matter
3. Add content using Markdown or HTML with Tailwind classes

Example:
```markdown
---
layout: page
title: About
permalink: /about/
---

<div class="prose lg:prose-xl">
  Your content here...
</div>
```

### Creating Blog Posts

1. Add `.md` files to `_posts/` directory
2. Use the post layout
3. Add front matter

Example:
```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-01
categories: blog
---

Post content here...
```

## Troubleshooting

### CSS Not Building
- Ensure Node.js and npm are installed
- Run `make clean rebuild` to force a fresh build
- Check terminal output for errors

### Jekyll Build Issues
- Ensure all gems are installed: `bundle install`
- Try running Jekyll with verbose output: `bundle exec jekyll serve --verbose`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This theme is available as open source under the terms of the MIT License.
