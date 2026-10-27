# The "Hey Saathi" wake word

**It works out of the box.** With no trained model installed, Saathi listens
for its name a different way: the speech detector picks out short bursts of
speech while it's idle, the local Whisper model transcribes each one, and a
burst that starts with "Saathi" or "Hey Saathi" wakes it. "Hey Saathi, what's
the time?" in one breath goes straight through as the request. Nothing leaves
the Mac. The cost is compute: one transcription per burst of speech in the
room. Set `WAKE_BY_NAME=off` in `.env` to use only Space or the orb.

A trained openWakeWord model is lighter and is used automatically when it
exists. To train one:

Saathi listens for its name with [openWakeWord](https://github.com/dscripka/openWakeWord),
which runs on your Mac. The library ships models for a few English phrases but
not "Hey Saathi", so we train one. It takes about an hour in a free Google
Colab notebook and needs no recordings: the notebook makes thousands of
synthetic clips of the phrase with text-to-speech and trains a small model on them.

1. Open openWakeWord's automatic training notebook in Colab:
   `notebooks/automatic_model_training.ipynb` in the openWakeWord repository
   (the README links it as "train a custom model in Colab").
2. Runtime → Change runtime type → a GPU.
3. Set the target phrase. English text-to-speech reads "saathi" as "sath-ee",
   so spell it how it sounds: `hey saahthee`. Listen to the sample clip the
   notebook plays and adjust the spelling until it sounds right.
4. Run all cells. When it finishes, download the `.onnx` file.
5. Save it as `models/hey_saathi.onnx` in this project and restart Saathi.
   Settings → Listening → Wake word sensitivity tunes how easily it fires.

Note: the notebook pins packages that have no builds for Python 3.13, which
newer Colab runtimes use. Pick an older runtime version (Python 3.11) under
Runtime → Change runtime type if the install cells fail.
