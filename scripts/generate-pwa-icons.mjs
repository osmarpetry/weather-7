import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const iconsDir = path.join(publicDir, 'icons')
const sourceIcon = path.join(iconsDir, 'icon.svg')

const iconTargets = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-384.png', size: 384 },
  { name: 'icon-512.png', size: 512 }
]

function allTargetsExist() {
  return iconTargets.every(({ name }) => existsSync(path.join(iconsDir, name)))
}

function commandExists(command) {
  try {
    execFileSync('which', [command], { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

function generateWithSips() {
  for (const { name, size } of iconTargets) {
    const outputPath = path.join(iconsDir, name)

    execFileSync(
      'sips',
      ['-s', 'format', 'png', '-z', String(size), String(size), sourceIcon, '--out', outputPath],
      { stdio: 'inherit' }
    )
  }
}

mkdirSync(iconsDir, { recursive: true })

if (!existsSync(sourceIcon)) {
  throw new Error(`Missing source icon: ${sourceIcon}`)
}

if (allTargetsExist()) {
  process.exit(0)
}

if (process.platform === 'darwin' && commandExists('sips')) {
  generateWithSips()
  process.exit(0)
}

throw new Error(
  'PWA icon assets are missing and automatic generation is only configured for macOS with sips. Run `bun scripts/generate-pwa-icons.mjs` on macOS and commit the generated files.'
)
