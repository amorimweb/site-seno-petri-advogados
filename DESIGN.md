---
name: Seno Petri Advogados Associados
description: Landing page institucional de advocacia em Parauapebas/Canaã dos Carajás, PA (identidade própria "heritage")
colors:
  ink: "#0f2b24"
  ink2: "#163f34"
  gold: "#c6992e"
  goldDeep: "#8a6a1a"
  paper: "#f4efe2"
  soft: "#dcd2b4"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(46px, 7.4vw, 104px)"
    fontWeight: 300
    lineHeight: 0.96
    letterSpacing: "-0.03em"
    textTransform: uppercase
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  pill: "100px"
  circle: "50%"
spacing:
  section: "9vw 8vw"
components:
  whatsapp-float:
    backgroundColor: "#1c9d58"
    textColor: "white"
    rounded: "{rounded.pill}"
    padding: "15px 20px"
  ticker:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    animation: "translateX loop, 26s linear infinite"
  seal:
    backgroundColor: "transparent"
    ringColor: "{colors.gold}"
    animation: "rotate 360deg, 28s linear infinite"
---

# Design System: Seno Petri Advogados Associados

Identidade **própria** ("heritage"), não uma variante reaproveitada de outro escritório do mesmo template. Verde profundo quase preto + dourado/latão, fiel à parede real da recepção (foto em `public/detail.png`) e ao logo "S" verde/dourado (`public/logo.jpg`).

## Direção visual

Tradição + solidez, mas com movimento contínuo — a marca comunica décadas de experiência sem parecer um site parado no tempo:

- **Hero**: tipografia gigante em caixa alta (Manrope 300, uppercase), foto real da fachada (`public/hero.png`), selo circular "DESDE 1994" com anel pontilhado dourado em rotação constante (CSS `@keyframes sealSpin`, 28s linear infinite).
- **Ticker**: faixa dourada com as três áreas de atuação (Trabalhista · Cível · Previdenciário) rolando em loop infinito (`@keyframes tickerScroll`, translateX -50%, conteúdo duplicado para loop contínuo sem costura).
- **Contador animado**: seção "Números" com `IntersectionObserver` (`app/page.tsx`) — ao entrar na viewport, três contadores sobem de 0 até seus valores finais (30+ anos, 2 unidades, 3 áreas) em ~1.5s com easing cúbico, via `requestAnimationFrame`, sem bibliotecas externas.
- **Timeline numerada**: quatro marcos (1994 · +30 anos · Tax Group · 2024/Canaã dos Carajás) em cartões numerados 01–04, inspirados na seção de diferenciais do site https://mateuscastro-dev.vercel.app/.
- **Scroll reveal**: seções entram com fade + translateY via `animation-timeline: view()` (CSS puro, sem JS de scroll).

## Dados reais

Endereço, telefone/WhatsApp, e-mail e áreas de atuação em `app/config.ts` refletem o perfil real do escritório (Instagram @senopetri, Facebook "Seno Petri Advogados Associados"). Ano de fundação (1994) é aproximado — ver observação em `PRODUCT.md`.

Este projeto é standalone: não depende mais do sistema de temas compartilhado com outros `site-*-main` (não há mais `theme-navy`, `theme-clay`, etc. em `app/variants.css`) — apenas `.theme-heritage`, específico deste escritório.
