import toml
import json
import argparse
from pathlib import Path

if __name__ == '__main__':

  parser = argparse.ArgumentParser()
  parser.add_argument('file', help='toml file')

  args = parser.parse_args()
  input_file = Path(args.file)

  output_file = Path(f'./charactor_sheet/json/{input_file.stem}.json')

  with input_file.open(mode='r', encoding='utf-8') as f:
    t = toml.load(f)
  with output_file.open(mode='w', encoding='utf-8') as f:
    json.dump(t, f, indent=4, ensure_ascii=False)



