def generate_prompt(product: str, style: str):
    base = f"{product} product advertisement"

    if style == "Luxury":
        return base + ", black background, gold lighting, premium look"

    if style == "Neon":
        return base + ", neon lights, cyberpunk colors, glowing"

    if style == "Minimal":
        return base + ", clean white background, soft shadows"

    if style == "Social":
        return base + ", instagram ad style, vibrant colors, bold text"

    return base