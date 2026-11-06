import re
s=open('index.src.html').read()
def ic(m):
    svg=open(f'assets/icons/{m.group(1)}.svg').read()
    path=re.search(r'<path d="([^"]+)"',svg).group(1)
    return f'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="{path}"/></svg>'
open('index.html','w').write(re.sub(r'\{\{(\w+)\}\}',ic,s))
